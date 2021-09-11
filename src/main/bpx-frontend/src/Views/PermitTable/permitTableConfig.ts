import { ColumnDefConfig } from "../../Components/AgGridTable/agGridModels";

export const permitTableColDefConfig: ColumnDefConfig = {
    facilityId: {
        columnName: 'Facility ID',
        columnType: 'string',
        sortable: true
    },
    permitNumber: {
        columnName: 'Permit Number',
        columnType: 'url',
        sortable: true
    },
    legacyPermitNumber: {
        columnName: 'Legacy Permit Number',
        columnType: 'string',
        sortable: true
    },
    applicationNumber: {
        columnName: 'Application Number',
        columnType: 'modal',
        sortable: true
    },
    action: {
        columnName: 'Action',
        columnType: 'string',
        sortable: true
    },
    reason: {
        columnName: 'Reason',
        columnType: 'string',
        sortable: true
    },
    publicNotice: {
        columnName: 'Public Notice',
        columnType: 'group',
        sortable: false,
        children: {
            startDate: {
                columnName: 'Start Date',
                columnType: 'string',
                sortable: true
            },
            endDate: {
                columnName: 'End Date',
                columnType: 'string',
                sortable: true
            }
        }
    },
    // publicNoticeDocument: {
    //     columnName: 'Public Notice Document',
    //     columnType: 'number',
    // },
    // permitAnalysisDocument: {
    //     columnName: 'Permit Analysis Document',
    //     columnType: 'number',
    // },
    // publicComments: {
    //     columnName: 'Public Comments',
    //     columnType: 'string',
    // },
    final: {
        columnName: 'Final',
        columnType: 'group',
        sortable: false,
        children: {
            finalPermitWaiverDocument: {
                columnName: 'Final Permit/Waiver Document',
                columnType: 'string',
                sortable: true
            },
            finalIssuanceDate: {
                columnName: 'Final Issuance Date',
                columnType: 'string',
                sortable: true
            },
            expirationDate: {
                columnName: 'Expiration Date',
                columnType: 'string',
                sortable: true
            }
        }
    },
    rescissionDate: {
        columnName: 'Rescission Date',
        columnType: 'string',
        sortable: true
    },
    description: {
        columnName: 'Description',
        columnType: 'string',
        sortable: true
    }
}

export const permitMUITableColDefConfig: ColumnDefConfig = {
    facilityId: {
        columnName: 'Facility ID',
        columnType: 'string',
        sortable: true
    },
    permitNumber: {
        columnName: 'Permit Number',
        columnType: 'url',
        sortable: true
    },
    legacyPermitNumber: {
        columnName: 'Legacy Permit Number',
        columnType: 'string',
        sortable: true
    },
    applicationNumber: {
        columnName: 'Application Number',
        columnType: 'navigate',
        sortable: true
    },
    action: {
        columnName: 'Action',
        columnType: 'string',
        sortable: true
    },
    reason: {
        columnName: 'Reason',
        columnType: 'string',
        sortable: true
    },
    startDate: {
        columnName: 'Start Date',
        columnType: 'string',
        sortable: true
    },
    endDate: {
        columnName: 'End Date',
        columnType: 'string',
        sortable: true
    },
    // publicNoticeDocument: {
    //     columnName: 'Public Notice Document',
    //     columnType: 'number',
    // },
    // permitAnalysisDocument: {
    //     columnName: 'Permit Analysis Document',
    //     columnType: 'number',
    // },
    // publicComments: {
    //     columnName: 'Public Comments',
    //     columnType: 'string',
    //     sortable: true
    // },
    finalPermitWaiverDocument: {
        columnName: 'Final Permit/Waiver Document',
        columnType: 'string',
        sortable: true
    },
    finalIssuanceDate: {
        columnName: 'Final Issuance Date',
        columnType: 'string',
        sortable: true
    },
    expirationDate: {
        columnName: 'Expiration Date',
        columnType: 'string',
        sortable: true
    },
    rescissionDate: {
        columnName: 'Rescission Date',
        columnType: 'string',
        sortable: true
    },
    description: {
        columnName: 'Description',
        columnType: 'string',
        sortable: true
    }
}