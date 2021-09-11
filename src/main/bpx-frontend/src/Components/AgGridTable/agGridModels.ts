import { FacilityTableData } from "../../Views/FacilityTable/FacilityTableModels";
import { PermitTableData } from "../../Views/PermitTable/PermitTableModels";

export interface ColumnDefConfig {
    [name: string]:  ColumnDefConfigObject;
}

export interface ColumnDefConfigObject {
    columnName: string;
    columnType: 'url'| 'navigate' | 'string' | 'number' | 'group' | 'modal';
    sortable: boolean;
    children?: ColumnDefConfig;
}

export interface TableState {
    // tableLoading: boolean;
    tableWidth: string;
    permitType: 'facility' | 'permit';
    colDefConfig: ColumnDefConfig;
    sortFilterState: SortFilterState;
    rowHeight: number | undefined;
}

export interface DefaultTableState extends TableState {
    rowData: PermitTableData[] | FacilityTableData[];
    sort(criteria: string): void;
}

export interface SortFilterState {
    criteria: string | null;
    state: 'ASC' | 'DESC',
    page: number;
    search: string;
}