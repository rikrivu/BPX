import { createColumnDefWithRowDataForSkeleton } from './agGridSkeletonConfig';
import { AgGridColumn, AgGridColumnGroupProps, AgGridColumnProps, AgGridReact } from 'ag-grid-react';
import { GridReadyEvent } from 'ag-grid-community';
import { useState } from 'react';
import SkeletonCellRenderer from './SkeletonCellRenderer';

const frameworkComponents = {
    agColumnHeader: SkeletonCellRenderer,
    customHeaderGroupComponent: SkeletonCellRenderer,
    defaultCellRenderer: SkeletonCellRenderer
}

function AgGridSkeletonTable (props: {columnSize: number, groupColumnIndex?: number[]}) {
    
    const [gridApi, setGridApi] = useState<any>(null);

    const {columnDefs, rowData} = createColumnDefWithRowDataForSkeleton(props.columnSize, props.groupColumnIndex);

    function onGridReady(params: GridReadyEvent) {
        setGridApi(params.api);
    }
    
    // Resizing columns to fit available width when data is rendered for the first time
    const onFirstDataRendered = (params: any): void => {
        gridApi?.sizeColumnsToFit();
    }

    // console.log('Skeleton', columnDefs, rowData);

    return columnDefs && rowData ? (
        <div className="ag-theme-alpine" style={{ width: '96.6vw' }}>
            <AgGridReact
                rowData={rowData}
                onGridReady={onGridReady}
                onFirstDataRendered={onFirstDataRendered}
                domLayout={'autoHeight'}
                animateRows={true}
                frameworkComponents={frameworkComponents}
                rowClassRules={{
                    'alt-background': (params) => {
                        return params.node.rowIndex % 2 !== 0;
                    },
                }}
            >

                {
                    columnDefs.map((col: (AgGridColumnProps | AgGridColumnGroupProps), i: number) => {
                        if ((col as AgGridColumnGroupProps).children?.length) {
                            return (
                                <AgGridColumn key={i} headerName={col.headerName}
                                    headerGroupComponent='customHeaderGroupComponent'
                                    headerClass='skeleton-header'
                                >
                                    {
                                        (col as AgGridColumnGroupProps).children.map((col: AgGridColumnProps, j: number) => (
                                            <AgGridColumn
                                                key={`${i}-${j}`}
                                                headerName={col.headerName}
                                                field={col.field}
                                                cellRenderer='defaultCellRenderer'
                                                headerClass='skeleton-header'
                                            />
                                        ))
                                    }
                                </AgGridColumn>
                            );
                        } else {
                            return (
                                <AgGridColumn
                                    key={i}
                                    headerName={col.headerName}
                                    field={(col as AgGridColumnProps).field}
                                    cellRenderer='defaultCellRenderer'
                                    headerClass='skeleton-header'
                                />
                            );
                        }
                    })
                }

            </AgGridReact>
        </div>
    ) : <div></div>;
}

export default AgGridSkeletonTable;