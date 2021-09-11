import { AgGridColumn, AgGridColumnGroupProps, AgGridColumnProps, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useState } from 'react';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { ColumnDefConfig, DefaultTableState } from './agGridModels';
import DefaultCellRenderer from './CellRenderers/DefaultCellRenderer/DefaultCellRenderer';
import URLRenderer from './CellRenderers/URLRenderer/URLRenderer';
import NavigationRenderer from './CellRenderers/NavigationRenderer/NavigationRenderer';
import ModalRenderer from './CellRenderers/ModalRenderer/ModalRenderer';
import { getCellRenderer } from './agGridTableMethod';
import CustomHeader from './CustomHeader/CustomHeader';
import { wideColumns } from './AgGridTableConstants';
import { useStickyHeader } from './stickyHeaderHook';

const frameworkComponents = {
    agColumnHeader: CustomHeader,
    defaultCellRenderer: DefaultCellRenderer,
    urlRenderer: URLRenderer,
    navigationRenderer: NavigationRenderer,
    modalRenderer: ModalRenderer
  }

function AgGridTable (props: DefaultTableState) {

    useStickyHeader();
    
    const [gridApi, setGridApi] = useState<GridApi>();

    const onGridReady = (params: GridReadyEvent) => {
        // using hooks - setGridApi/setColumnApi are returned by useState
        // console.log('GridReady Params', params);
        setGridApi(params.api);
    }

    // Resizing columns to fit available width when data is rendered for the first time
    const onFirstDataRendered = (params: any): void => {
        gridApi?.sizeColumnsToFit();
    }

    return (
        <div className="ag-theme-alpine" style={{ width: props.tableWidth }}>
            <AgGridReact
                onGridReady={onGridReady}
                onFirstDataRendered={onFirstDataRendered}
                rowData={props.rowData}
                domLayout={'autoHeight'}
                animateRows={true}
                frameworkComponents={frameworkComponents}
                rowHeight={props.rowHeight}
                headerHeight={80}
                groupHeaderHeight={50}
                rowClassRules={{
                    'alt-background': (params) => {
                        return params.node.rowIndex % 2 !== 0;
                    },
                }}
            >
                {
                    Object.keys(props.colDefConfig).map((key: keyof ColumnDefConfig) => {

                        let columnProps: (AgGridColumnProps | AgGridColumnGroupProps) = {
                            headerName: props.colDefConfig[key].columnName,
                            // autoHeight: true,
                            cellClass: 'default-cell',
                            // wrapText: true
                        }

                        if (props.colDefConfig[key].children) {
                            return (
                                <AgGridColumn key={key} {...columnProps} headerClass="group-header">
                                    {
                                        Object.keys(props.colDefConfig[key].children!).map((subKey: keyof ColumnDefConfig) => {

                                            columnProps = {
                                                ...columnProps,
                                                headerName: props.colDefConfig[key].children?.[subKey].columnName,
                                                headerComponentParams: {
                                                    sortable: props.colDefConfig[key].children?.[subKey].sortable,
                                                    sortState: props.sortFilterState,
                                                    sort: props.sort
                                                },
                                                headerClass: 'default-header',
                                                field: subKey as string,
                                                cellRenderer: getCellRenderer(props.colDefConfig[key].children?.[subKey]),
                                            };

                                            if (wideColumns.includes(key as string)) {
                                                // columnProps.width = 250;
                                                columnProps.suppressSizeToFit = true;
                                            }

                                            return (
                                                <AgGridColumn key={subKey} {...columnProps}/>
                                            );
                                        })
                                    }
                                </AgGridColumn>
                            );
                        } else {

                            // console.log('Check', wideColumns, key, wideColumns.includes(key as string));
                            columnProps = {
                                ...columnProps,
                                headerComponentParams: {
                                    sortable: props.colDefConfig[key].sortable,
                                    sortState: props.sortFilterState,
                                    sort: props.sort
                                },
                                headerClass: 'default-header',
                                field: key as string,
                                cellRenderer: getCellRenderer(props.colDefConfig[key]),
                            }

                            if (wideColumns.includes(key as string)) {
                                columnProps.width = 250;
                                columnProps.suppressSizeToFit = true;
                            }

                            return (
                                <AgGridColumn key={key} {...columnProps}/>
                            );
                        }
                    })
                }
            </AgGridReact>
        </div>
    );
}

export default AgGridTable;