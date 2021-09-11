import { ColumnDefConfigObject } from "./agGridModels";

export const getCellRenderer = (config: ColumnDefConfigObject | undefined): string => {
    
    if (config) {
        switch (config.columnType) {
            case 'url': {
                return 'urlRenderer';
            }
            case 'navigate': {
                return 'navigationRenderer';
            }
            case 'modal': {
                return 'modalRenderer';
            }
            case 'string': case 'number': default: {
                return 'defaultCellRenderer';
            }
        }
    } else {
        return 'defaultCellRenderer';
    }
}