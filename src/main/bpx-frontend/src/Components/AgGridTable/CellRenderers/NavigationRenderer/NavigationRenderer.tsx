import { GroupCellRendererParams } from "ag-grid-community/dist/lib/rendering/cellRenderers/groupCellRenderer";
import CustomTooltip from "../../../CustomTooltip/CustomTooltip";

function NavigationRenderer (params: GroupCellRendererParams) {
    return params.value ?
    <div>
        <CustomTooltip title="View Permits for this Facility">
            <a href={`permits/${params.value}`}>{params.value}</a>
        </CustomTooltip>
    </div>
    : '---'
}

export default NavigationRenderer;