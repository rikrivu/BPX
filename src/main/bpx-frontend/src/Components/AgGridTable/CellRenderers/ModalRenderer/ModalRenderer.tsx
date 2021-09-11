import { GroupCellRendererParams } from "ag-grid-community/dist/lib/rendering/cellRenderers/groupCellRenderer";
import { useContext } from "react";
import { ModalContext, ModalProvider } from "../../../Modal/ModalContext";
import { UseModal } from "../../../Modal/models";
import FileViewerModal from '../../../FileViewerModal/FileViewerModal';
import CustomTooltip from "../../../CustomTooltip/CustomTooltip";

function ModalConsumer (params: GroupCellRendererParams) {

    const { toggleModal }: UseModal = useContext<UseModal>(ModalContext) as UseModal;

    // console.log('ModalRenderer params', params);

    const openModal = (): void => {
        toggleModal(
            <FileViewerModal
                applicationNumber={params.value}
                facilityId={params.data.facilityId}
            />
        )
    }
    
    return params.value ?
    <CustomTooltip title="View All Files">
        <button type="button" className="modal-open-link" onClick={() => openModal()}>
            {params.value}
        </button>
    </CustomTooltip>
    : <div>---</div>
}

function ModalRenderer (params: GroupCellRendererParams) {
    return (
        <ModalProvider showClearModal={false}>
            <ModalConsumer {...params}/>
        </ModalProvider>
    );
}

export default ModalRenderer;