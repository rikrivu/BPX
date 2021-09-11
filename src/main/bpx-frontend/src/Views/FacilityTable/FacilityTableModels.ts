import { ColumnDefConfig, TableState } from '../../Components/AgGridTable/agGridModels';

export interface FacilityAPIResponse {
    facilities: {
        content: FacilityTableData[];
        pageable: {
            sort: {
              sorted: boolean;
              unsorted: boolean;
              empty: boolean
            };
            offset: number;
            pageNumber: number;
            pageSize: number;
            paged: boolean;
            unpaged: boolean
        };
        totalElements: number;
        totalPages: number;
        last: boolean;
        size: number;
        number: number;
        sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean
        };
        numberOfElements: number;
        first: boolean;
        empty: boolean
    };
    columns: ColumnDefConfig;
}

export interface FacilityTableData {
    facilityId: string;
    facilityName: string;
    companyId: string;
    companyName: string;
    operating: string;
    facilityClass: string;
    facilityType: string;
    county: string;
    latitude: number;
    longitude: number;
    application: string;
    permit: string;
    multiple: string;
    titleVPermit: string;
    url: string;
    facilityFilter: string;
}

export interface FacilityTableState extends TableState {
    rowData: FacilityTableData[];
    pageSize: number;
}