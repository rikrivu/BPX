import { GroupCellRendererParams } from "ag-grid-community/dist/lib/rendering/cellRenderers/groupCellRenderer";

function DefaultCellRenderer (params: GroupCellRendererParams) {
    // console.log('DefaultCellRenderParams', params);
    return <div>{params.value ? params.value : '---'}</div>;
}

export default DefaultCellRenderer;