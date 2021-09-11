export interface ExcelViewerTable {
    tableName: string;
    columns: string[];
    rows: string[][];
    actionableColumnIndexes: number[];
}

export interface ExcelViewerFileConfig {
    [name: string]: string;
}

export interface BlobData {
    date: string;
    blobList: string[];
}