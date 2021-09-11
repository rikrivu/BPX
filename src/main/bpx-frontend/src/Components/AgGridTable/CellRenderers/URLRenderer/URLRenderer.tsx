import { GroupCellRendererParams } from "ag-grid-community/dist/lib/rendering/cellRenderers/groupCellRenderer";
import { useContext } from "react";
import { GlobalStoreState, globalStore } from "../../../../GlobalStore/GlobalStore";
import { getPDF } from "../../../../services/data-service";
import { notifyMessageWithLoading } from "../../../../utils/commonMethods";
import CustomTooltip from "../../../CustomTooltip/CustomTooltip";

function URLRenderer (params: GroupCellRendererParams) {

    const globalState: GlobalStoreState = useContext<GlobalStoreState>(globalStore);
    const { dispatch } = globalState;

    let downloadableFileName: string = '';

    const openPDF = (facilityId: string, permitId: string): void => {

        dispatch([{type: 'isLoading', data: true}]);
        
        getPDF(facilityId, permitId).then(res => {
            console.log('res from URLRenderer', res);
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

    // console.log('url renderer params', params);
    return params.data.facilityId && params.value ?
    <CustomTooltip title="Open Permit">
        <button type="button" className="link-btn no-truncate" onClick={() => openPDF(params.data.facilityId, params.value)}>
            {params.value}
        </button>
    </CustomTooltip>
    : (params.value ? params.value : '---');
}

export default URLRenderer;