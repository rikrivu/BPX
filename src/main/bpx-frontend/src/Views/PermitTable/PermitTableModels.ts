import { ColumnDefConfig, TableState } from "../../Components/AgGridTable/agGridModels";

export interface PermitAPIResponse {
    permits: PermitTableData[],
    columns: ColumnDefConfig;
}

export interface PermitTableData {
    facilityId: string;
    permitNumber: string;
    legacyPermitNumber: string;
    applicationNumber: string;
    action: string;
    reason: string;
    startDate: string;
    endDate: string;
    publicNoticeDocument: string;
    permitAnalysisDocument: string;
    publicComments: string;
    finalPermitWaiverDocument: string;
    finalIssuanceDate: string;
    expirationDate: string;
    rescissionDate: string;
    description: string;
}

export interface PermitTableState extends TableState {
    rowData: PermitTableData[];
}