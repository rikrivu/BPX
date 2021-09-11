import { GlobalStoreAction } from "../GlobalStore/GlobalStore";
import { FacilityTableState } from "../Views/FacilityTable/FacilityTableModels";
import { PermitTableState } from "../Views/PermitTable/PermitTableModels";

export const createTableStateForSort =
(criteria: string, tableData: (FacilityTableState | PermitTableState)): (FacilityTableState | PermitTableState) => {
    
    const updatedTableData: (FacilityTableState | PermitTableState) = {
        ...tableData,
        sortFilterState: {
            ...tableData.sortFilterState,
            criteria: criteria
        }
    };
    if (tableData.sortFilterState.criteria === criteria) {
        switch (tableData.sortFilterState.state) {
            case 'ASC': {
                updatedTableData.sortFilterState.state = 'DESC';
                break;
            }
            case 'DESC': {
                updatedTableData.sortFilterState.state = 'ASC';
                break;
            }
        }
    } else {
        updatedTableData.sortFilterState.state = 'DESC';
    }
    // console.log('createTableStateForSort', updatedTableData);
    return updatedTableData;
}

export const notifyMessageWithLoading = (dispatch: (actions: GlobalStoreAction[]) => void, type: 'success' | 'fail'): void => {
    dispatch([
        {type: 'isLoading', data: false},
        {
            type: 'showNotifier', data: {
                show: 'start',
                type: type
            }
        }
    ]);

    setTimeout(() => {
        dispatch([{
            type: 'showNotifier', data: {
                show: 'end',
                type: type
            }
        }]);
    }, 3000)
}

export const notifyMessage = (dispatch: (actions: GlobalStoreAction[]) => void, type: 'success' | 'fail'): void => {
    dispatch([
        {
            type: 'showNotifier', data: {
                show: 'start',
                type: type
            }
        }
    ]);

    setTimeout(() => {
        dispatch([{
            type: 'showNotifier', data: {
                show: 'end',
                type: type
            }
        }]);
    }, 3000)
}

export const downloadFile = (fileName: string, url: string): void => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download', fileName
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode?.removeChild(link);
}

export const camelCaseToTitleCase = (camelCase: string): string =>{
    if (camelCase == null || camelCase === "") {
      return camelCase;
    }

    camelCase = camelCase.trim();
    let newText = "";
    for (let i = 0; i < camelCase.length; i++) {
      if (/[A-Z]/.test(camelCase[i])
          && i !== 0
          && /[a-z]/.test(camelCase[i-1])) {
        newText += " ";
      }
      if (i === 0 && /[a-z]/.test(camelCase[i]))
      {
        newText += camelCase[i].toUpperCase();
      } else {
        newText += camelCase[i];
      }
    }

    return newText;
  }

export const checkDateDifference = (checkDate: string, differenceToCheck: number): boolean => {
    return (new Date().getTime() - new Date(checkDate).getTime()) > differenceToCheck;
}