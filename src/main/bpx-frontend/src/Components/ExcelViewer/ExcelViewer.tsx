import './ExcelViewer.scss';
import { Dispatch, Fragment, SetStateAction, useContext, useEffect, useState } from 'react';
import { actionColumnNameKeywords, excelFileMapping } from './excelFileMapping';
import * as XLSX from 'xlsx';
import { ExcelViewerFileConfig, ExcelViewerTable } from './ExcelViewerModels';
import { WorkBook, WorkSheet } from 'xlsx';
import { DownloadsViewStateContext } from '../../AzureBLOBStorageConnection/contexts/viewStateContext';
import { BlobDownloadsViewStateService } from '../../AzureBLOBStorageConnection/services/BlobDownloadsViewState';
import NotifierPopIn from '../../Components/NotifierPopIn/NotifierPopIn';
import { BlobItemDownload } from '../../AzureBLOBStorageConnection/types/azure-storage';
import { GlobalStoreState, globalStore } from '../../GlobalStore/GlobalStore';
import { camelCaseToTitleCase, downloadFile, notifyMessageWithLoading } from '../../utils/commonMethods';
import CustomTable from '../CustomTable/CustomTable';

const createActionableColumnIndexes = (cols: string[]): number[] => {

    return  cols.reduce((actionColIndexes: number[], col: string, index: number) => {

        let isColActionable: boolean = false;

        for (let i = 0; i < actionColumnNameKeywords.length; i++) {
            if (col.includes(actionColumnNameKeywords[i])) {
                isColActionable = true;
                break;
            }
        }

        if (isColActionable) {
            actionColIndexes.push(index);
        }

        return actionColIndexes;
    }, [])
}

function ExcelViewer (props: {permitType: string}) {

    const globalState: GlobalStoreState = useContext<GlobalStoreState>(globalStore);
    const { dispatch } = globalState;
    
    const downloadsContext: BlobDownloadsViewStateService = useContext<BlobDownloadsViewStateService>(DownloadsViewStateContext);

    const [data, setData]: [ExcelViewerTable, Dispatch<SetStateAction<ExcelViewerTable>>] = useState<ExcelViewerTable>({
        tableName: '',
        columns: [],
        rows: [],
        actionableColumnIndexes: []
    });

    useEffect(() => {

        fetch(`./${excelFileMapping[props.permitType as keyof ExcelViewerFileConfig]}.xlsx`)
        .then(res => res.blob()).then((res: Blob) => {
            const file: Blob = res;
            // var name = f.name;
            const reader: FileReader = new FileReader();
            reader.onload = (evt) => { // evt = on_file_select event
                /* Parse data */
                const bstr = evt?.target?.result;
                const workBook: WorkBook = XLSX.read(bstr, {type:'binary'});
                /* Get first worksheet */
                const workSheetName: string = workBook.SheetNames[0];
                const workSheet: WorkSheet = workBook.Sheets[workSheetName];
                // console.log('Sheets', workBook, workSheet);
                /* Convert array of arrays */
                const data: unknown[] = XLSX.utils.sheet_to_json(workSheet, {header: 1} as XLSX.Sheet2JSONOpts);
                /* Update state */
                if (data.length >= 2) {
                    const [cols, ...rows]: [string[], string[]] = data as [string[], string[]];
                    const modifiedCols: string[] = cols.map((col: string) => camelCaseToTitleCase(col.replace(/\s\s+/g, ' ')));
                    setData({
                        tableName: workSheetName,
                        columns: modifiedCols,
                        rows: rows,
                        actionableColumnIndexes: createActionableColumnIndexes(modifiedCols)
                    });
                    console.log("Data \n", cols, rows);
                }
                
            }
            reader.readAsBinaryString(file);
        });
    }, [props.permitType])

    useEffect(() => {
        const sub = downloadsContext.downloadedItems$
        .subscribe((item: BlobItemDownload) => {
            if (item.filename && item.url) {
                console.log('FiletoDownload', item)
                if (item.filename.includes('.pdf')) {
                    window.open(item.url)
                } else {
                    downloadFile(
                        item.filename.split('/').pop() as string,
                        item.url
                    ) 
                }
                // dispatch([{type: 'isLoading', data: false}])
                notifyMessageWithLoading(dispatch, 'success')
            }
        },
        err => {
            console.log('Err', err);
            notifyMessageWithLoading(dispatch, 'fail');
        });
    
        return () => sub.unsubscribe();
      }, [dispatch, downloadsContext.downloadedItems$]);

    const setFileToDownloadName = (truncatedName: string): void => {
        dispatch([{type: 'isLoading', data: true}])
        
        const fileName: string = JSON.parse(sessionStorage.getItem('BlobData')!)
        .blobList.find((file: string) => file.includes(truncatedName));

        console.log('Found FIleName', fileName);

        if (fileName) {
            downloadsContext.downloadItem(fileName);
        } else {
            notifyMessageWithLoading(dispatch, 'fail');
        }
        
    }

    const setFileToDownload = (fileName: string) => {
        setFileToDownloadName(fileName);
    }

    return data.columns.length && data.rows.length ?
    <Fragment>
        <div className="excel-viewer-container">
            <CustomTable data={data} setFileToDownload={setFileToDownload}/>
        </div>
        <NotifierPopIn {...globalState.state.showNotifier}/>
    </Fragment>
    : <div>No Table Data Available</div>
}

export default ExcelViewer;