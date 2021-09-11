import './CustomTable.scss'
import { ExcelViewerTable } from "../ExcelViewer/ExcelViewerModels";
import { useStickyHeader } from "./useStickyHeader";

const renderHeader = (tableName: string, headers: string[]) => (
    <thead>
      <tr>
        {headers.map((header: string, iHeader: number) => (
            <th key={`${tableName}-header-${iHeader}`}>{header}</th>
        ))}
      </tr>
    </thead>
);

function CustomTable (props: {data: ExcelViewerTable, setFileToDownload(fileName: string): void}) {

    const { tableRef, isSticky } = useStickyHeader();

    return (
        <div>

          {
            isSticky && (
                <table
                    className="sticky-header"
                >
                    {renderHeader(props.data.tableName, props.data.columns)}
                </table>
            )
          }

          <table ref={tableRef}>
            
            {renderHeader(props.data.tableName, props.data.columns)}

            <tbody>
              
                {
                    props.data.rows.map((row: string[], iRow: number) => {
                        return row.length ? (
                            <tr key={`${props.data.tableName}-row-${iRow}`}>
                                {
                                    props.data.columns.map((cell: string, iCell: number) => (
                                        <td key={`${props.data.tableName}-cell-${iCell}`}>
                                            {
                                                row[iCell] ?
                                                (
                                                    props.data.actionableColumnIndexes.includes(iCell) ?
                                                    <button
                                                        type="button"
                                                        className="download-btn"
                                                        onClick={() => props.setFileToDownload(row[iCell])}>
                                                        {row[iCell]}
                                                    </button>
                                                    // : cell === 'Permit Number' ? parseInt(row[iCell]).toFixed() : row[iCell]
                                                    : row[iCell]
                                                )
                                                : null
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ) : null
                    })
                }

            </tbody>
          </table>
        </div>
    );
}

export default CustomTable;