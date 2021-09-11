import { AgGridColumnProps, AgGridColumnGroupProps } from "ag-grid-react";

export const createColumnDefWithRowDataForSkeleton = (columnSize: number, groupColumnIndex?: number[])
: {
    columnDefs: (AgGridColumnProps | AgGridColumnGroupProps)[],
    rowData: any[]
} => {

    let columnDefs: (AgGridColumnProps | AgGridColumnGroupProps)[] = [];
    let rowData: any[] = []

    for (let i = 0; i < columnSize; i++) {
    
        const newColDef: (AgGridColumnProps | AgGridColumnGroupProps) = {
            headerName: `col${i}`
        }

        if (groupColumnIndex?.length && groupColumnIndex.includes(i)) {

            (newColDef as AgGridColumnGroupProps).children = [];

            for (let j = 0; j < 2; j++) {
                
                const childColDef: AgGridColumnProps = {
                    headerName: `col${i}-${j}`,
                    field: `col${i}-${j}`
                };

                (newColDef as AgGridColumnGroupProps).children.push(childColDef);
            }

        } else {
            newColDef.field = `col${i}`;
        }

        columnDefs.push(newColDef);
    }
    
    for (let i = 0; i < 12; i++) {
        const row = columnDefs.reduce((newRow: any, col: (AgGridColumnProps | AgGridColumnGroupProps)) => {
            if ((col as AgGridColumnGroupProps).children?.length) {
                newRow = {
                    ...newRow,
                    ...(col as AgGridColumnGroupProps).children.reduce((childRow: any, col: AgGridColumnProps) => {
                        childRow[col.field!] = col.field;
                        return childRow;
                    }, {})
                }
            } else {
                newRow[(col as AgGridColumnProps).field!] = (col as AgGridColumnProps).field;
            }
            return newRow;
        }, {});
        rowData.push(row);
    }


    return {
        columnDefs: columnDefs,
        rowData: rowData
    }
}
