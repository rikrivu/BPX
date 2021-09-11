import { ColumnDefConfig } from "../../Components/AgGridTable/agGridModels";

export const facitlityTableColDefConfig: ColumnDefConfig = {
    facilityId: {
        columnName: 'Facility ID',
        columnType: 'navigate',
        sortable: true
    },
    facilityName: {
        columnName: 'Facility Name',
        columnType: 'string',
        sortable: true
    },
    companyId: {
        columnName: 'Company ID',
        columnType: 'string',
        sortable: true
    },
    companyName: {
        columnName: 'Company Name',
        columnType: 'string',
        sortable: true
    },
    operating: {
        columnName: 'Operating',
        columnType: 'string',
        sortable: true
    },
    facilityClass: {
        columnName: 'Facility Class',
        columnType: 'string',
        sortable: true
    },
    facilityType: {
        columnName: 'Facility Type',
        columnType: 'string',
        sortable: true
    },
    latitude: {
        columnName: 'Latitude',
        columnType: 'number',
        sortable: true
    },
    longitude: {
        columnName: 'Longitude',
        columnType: 'number',
        sortable: true
    },
    application: {
        columnName: 'Applications',
        columnType: 'string',
        sortable: true
    },
    permit: {
        columnName: 'Permit',
        columnType: 'string',
        sortable: true
    },
    multiple: {
        columnName: 'Multiple',
        columnType: 'string',
        sortable: true
    },
    titleVPermit: {
        columnName: 'Title V Permit',
        columnType: 'string',
        sortable: true
    }
}