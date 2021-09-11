import './Home.scss';
import RadioButtonGroup from '../../Components/RadioButtonGroup/RadioButtonGroup';
import { blobStorageContainerName,
    // DATE_RANGE_CHECK,
    radioButtonOptions } from '../../utils/appConstants';
import { useContext, useEffect, useState } from 'react';
import FacilityTable from '../FacilityTable/FacilityTable';
import ExcelViewer from '../../Components/ExcelViewer/ExcelViewer';
import { SharedViewStateContext } from '../../AzureBLOBStorageConnection/contexts/viewStateContext';
import { BlobSharedViewStateService } from '../../AzureBLOBStorageConnection/services/BlobSharedViewState';
import { BlobItem } from '@azure/storage-blob';
import { BlobData } from '../../Components/ExcelViewer/ExcelViewerModels';
// import { checkDateDifference } from '../../utils/commonMethods';

function Home () {
    
    const context: BlobSharedViewStateService = useContext<BlobSharedViewStateService>(SharedViewStateContext);
    const sharedContext = useContext(SharedViewStateContext);

    const [permitType, setPermitType]: [string, React.Dispatch<React.SetStateAction<string>>]
    = useState<string>(radioButtonOptions[0].name);

    useEffect(() => {
        // const currentBlobDataInSession: BlobData = JSON.parse(sessionStorage.getItem('BlobData') as string);

        // if (!currentBlobDataInSession || checkDateDifference(currentBlobDataInSession.date, DATE_RANGE_CHECK)) {
        //     console.log('currentBlobDataInSession', currentBlobDataInSession.date);
        //     context.getContainerItems(blobStorageContainerName)
        // }

        context.getContainerItems(blobStorageContainerName)

    }, [context])

    useEffect(() => {
        const sub = sharedContext.itemsInContainer$
          .subscribe((items: BlobItem[]) => {
            // console.log('Container Items', items);
            const blobData: BlobData = {
                date: new Date().toDateString(),
                blobList: items.map((item: BlobItem) => item.name)
            };
            sessionStorage.setItem('BlobData', JSON.stringify(blobData));
          });
    
        return () => sub.unsubscribe();
      }, [sharedContext.itemsInContainer$])

    const handleRadioButtonToggle = (event: any): void => {
        // console.log('Current Selection', event.target.value);
        setPermitType(event.target.value);
    }
    
    return (
        <div className='home-wrapper'>

            <RadioButtonGroup
                options={radioButtonOptions}
                handleRadioButtonToggle={handleRadioButtonToggle}
                selected={permitType}    
            />

            <div className="table-wrapper">
                {
                    permitType === 'Air Permit' ?
                    <FacilityTable permitType={permitType}/>
                    : <ExcelViewer permitType={permitType}/>
                }
            </div>

        </div>
    )
}

export default Home;