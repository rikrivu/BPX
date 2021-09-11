import React, { useContext, useEffect, useState } from "react";
import AgGridTable from "../../Components/AgGridTable/AgGridTable";
// import Paginator from "../../Components/Paginator/Paginator";
// import TextField from '@material-ui/core/TextField';
// import ClearIcon from '@material-ui/icons/Clear';
// import CustomTooltip from "../../Components/CustomTooltip/CustomTooltip";
// import { SelectedPage } from "../../Components/Paginator/paginatorModels";
import { GlobalStoreState, globalStore } from "../../GlobalStore/GlobalStore";
import { getFacility } from "../../services/data-service";
import { createTableStateForSort } from "../../utils/commonMethods";
import { FacilityAPIResponse, FacilityTableState } from "./FacilityTableModels";

function FacilityTable (props: {permitType: string}) {

    const [tableData, setTableData]: [FacilityTableState, React.Dispatch<React.SetStateAction<FacilityTableState>>]
    = useState<FacilityTableState>({
        permitType: 'facility',
        tableWidth: '96.6vw',
        colDefConfig: {},
        rowData: [],
        pageSize: 0,
        sortFilterState: {
            criteria: 'formerCompanyFacilityName',
            page: 0,
            state: 'ASC',
            search: ''
        },
        rowHeight: undefined
    });

    // const [searchText, setSearchText]: [(string), React.Dispatch<React.SetStateAction<string>>]
    // = useState<string>('')

    const globalState: GlobalStoreState = useContext<GlobalStoreState>(globalStore);
    const { dispatch } = globalState;

    useEffect(() => {

        // dispatch([{type: 'tableLoading', data: true}])
        dispatch([{type: 'isLoading', data: true}])

        getFacility(props.permitType, tableData.sortFilterState).then((res: FacilityAPIResponse) => {
            // console.log('Facility Res', res);
            setTableData((prev: FacilityTableState) => ({
                ...prev,
                colDefConfig: res.columns,
                rowData: [...res.facilities.content],
                pageSize: res.facilities.totalPages
            }));

            // dispatch([{type: 'tableLoading', data: false}])
            dispatch([{type: 'isLoading', data: false}])
        })
        .catch(err => {
            console.log('Facility Err', err);

            setTableData((prev: FacilityTableState) => ({
                ...prev,
            }))

            // dispatch([{type: 'tableLoading', data: false}])
            dispatch([{type: 'isLoading', data: false}])
        })
    }, [dispatch, props.permitType, tableData.sortFilterState])

    // useEffect(() => {
    //     const debouncedSearch = setTimeout(() => {
    //         if ((searchText && searchText.trim().length) || searchText === '') {
    //             setTableData((prev: FacilityTableState) => {
    //                 if (prev.sortFilterState.search !== searchText) {
    //                     return {
    //                         ...prev,
    //                         sortFilterState: {
    //                             ...prev.sortFilterState,
    //                             search: searchText
    //                         }
    //                     }
    //                 } else {
    //                     return prev;
    //                 }
    //             });
    //         }
    //     }, 500);

    //     return () => clearTimeout(debouncedSearch);

    // }, [searchText])

    // Method to sort columns and setting sort state
    const sort = (criteria: string): void => {
        setTableData(createTableStateForSort(criteria, tableData) as FacilityTableState);
    }

    // const changePage = (selectedPage: SelectedPage): void => {
    //     setTableData((prev: FacilityTableState) => {
    //         return prev.sortFilterState.page !== selectedPage.selected ? {
    //             ...prev,
    //             sortFilterState: {
    //                 ...prev.sortFilterState,
    //                 page: selectedPage.selected
    //             }
    //         } : prev;
    //     })
    // }

    return (
        <div className="table-container">
            
            <div className="table-title">Facilities</div>

            {/* <div className="search-input">
                <TextField
                    value={searchText}
                    id="search-facility"
                    label="Facility Name"
                    placeholder="Enter Facility Name"
                    onChange={(event) => setSearchText(event.target.value)}
                />
                <CustomTooltip title="Clear Search">
                    <button
                        type="button"
                        className="modal-clear-button"
                        onClick={() => setSearchText('')}
                    >
                        <ClearIcon/>
                    </button>
                </CustomTooltip>
            </div> */}

            {
                // globalState.state.tableLoading ?
                // <AgGridSkeletonTable columnSize={14}/> :
                tableData.rowData.length ?
                <div>
                    <AgGridTable {...tableData} sort={sort}/>
                </div>
                : !globalState.state.isLoading ? <div>No Facility Table Data</div> : null
            }

            {/* <Paginator loading={globalState.state.isLoading}
                pageSize={tableData.pageSize} changePage={changePage}
            /> */}

        </div>
    );
}

export default FacilityTable;