import './FileViewerModal.scss';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { getFileList, getPDFByFileName } from "../../services/data-service";
import pdfLogo from '../../assets/pdf-icon.png';
import docxLogo from '../../assets/docx-icon.png';
import excelLogo from '../../assets/excel-icon.png';
import jsonLogo from '../../assets/json-icon.png';

import CustomTooltip from '../CustomTooltip/CustomTooltip';

// 3rd Party Libraries
import ClearIcon from '@material-ui/icons/Clear';
import { ModalContext } from '../Modal/ModalContext';

import { UseModal } from '../Modal/models';
import { GlobalStoreState, globalStore } from '../../GlobalStore/GlobalStore';
import { notifyMessageWithLoading } from '../../utils/commonMethods';

function FileViewerModal (props: {
    applicationNumber: string,
    facilityId: string
}) {

    const [fileList, setFileList]: [string[], Dispatch<SetStateAction<string[]>>] = useState<string[]>([]);
    const { toggleModal }: UseModal = useContext<UseModal>(ModalContext) as UseModal;

    const globalState: GlobalStoreState = useContext<GlobalStoreState>(globalStore);
    const { dispatch } = globalState;

    let downloadableFileName: string = '';

    useEffect(() => {

        dispatch([{type: 'isLoading', data: true}]);

        setFileList([]);
        getFileList(props.facilityId).then((res: string[]) => {
            setFileList([...res]);
            dispatch([{type: 'isLoading', data: false}]);
        }).catch(err => {
            console.log('Some error Occured', err);
            dispatch([{type: 'isLoading', data: false}]);
        })

    }, [dispatch, props.facilityId])

    const openPDFByName = (fileName: string): void => {

        dispatch([{type: 'isLoading', data: true}]);
        
        getPDFByFileName(fileName).then(res => {
            // console.log('res from URLRenderer', res);
            downloadableFileName = res.headers.get('Content-Disposition').replace('attachment; filename=: ', '');
            return res.blob();
        }).then(res => {
            // console.log('PDF', res);
            if (res.type === 'application/pdf') {
                const blob = new Blob([res], {type: 'application/pdf'});
                const fileURL = URL.createObjectURL(blob);
                window.open(fileURL);
            } else {
                const url = URL.createObjectURL(new Blob([res]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                  'download', downloadableFileName
                );
            
                // Append to html link element page
                document.body.appendChild(link);
            
                // Start download
                link.click();
            
                // Clean up and remove the link
                link.parentNode?.removeChild(link);
            }

            dispatch([{type: 'isLoading', data: false}]);
        })
        .catch(err => {
            console.log('Unable to retrieve file', err);
            
            notifyMessageWithLoading(dispatch, 'fail');
        })
    }
    
    return (
        <div className="file-view-container">
            <div>
                <div className="modal-header">
                    <div>Files for {props.applicationNumber}</div>
                    <CustomTooltip title="Close">
                        <button type="button" className="modal-clear-button" onClick={() => toggleModal()}>
                            <ClearIcon/>
                        </button>
                    </CustomTooltip>
                </div>

                <div className="modal-body app-scroll">
                    {
                        !globalState.state.isLoading ?
                        fileList.length ?
                        fileList.map((fileName: string, index: number) => (
                            <div key={index} className="pdf-link">

                                {
                                    fileName.includes('.pdf') ? <img src={pdfLogo} alt="pdf-icon.png"/>
                                    : fileName.includes('.docx') ? <img src={docxLogo} alt="docx-icon.png"/>
                                    : fileName.includes('.json') ? <img src={jsonLogo} alt="json-icon.png"/>
                                    : fileName.includes('.xl') ? <img src={excelLogo} alt="excel-icon.png"/>
                                    : <img src="" alt="."/>
                                }
                                
                                <CustomTooltip
                                    title={fileName.includes('pdf') ? 'Open PDF in new Tab' : 'Download File'}
                                >
                                    <button
                                        type="button"
                                        className="link-btn"
                                        onClick={() => openPDFByName(fileName)}
                                    >
                                        {fileName}
                                    </button>
                                </CustomTooltip>
                            </div>
                        ))
                        : <div>Unable tor retreive any file for this Application number.</div>
                        : null
                    }
                </div>

            </div>
        </div>
    );
}

export default FileViewerModal;