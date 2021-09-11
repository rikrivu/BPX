import './PermitTable.scss';
import { Dispatch, Fragment, SetStateAction, useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getPermits } from "../../services/data-service";
import { PermitAPIResponse, PermitTableState } from "./PermitTableModels";
import AgGridTable from '../../Components/AgGridTable/AgGridTable';
import { createTableStateForSort } from '../../utils/commonMethods';
import { GlobalStoreState, globalStore } from '../../GlobalStore/GlobalStore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CustomTooltip from '../../Components/CustomTooltip/CustomTooltip';
import NotifierPopIn from '../../Components/NotifierPopIn/NotifierPopIn';

function PermitTable () {

    const { facilityId } = useParams<{facilityId: string}>();

    const [tableData, setTableData]: [PermitTableState, Dispatch<SetStateAction<PermitTableState>>]
    = useState<PermitTableState>({
        tableWidth: '96.6vw',
        permitType: 'permit',
        colDefConfig: {},
        rowData: [],
        sortFilterState: {
            criteria: 'permitNumber',
            page: 0,
            state: 'ASC',
            search: ''
        },
        rowHeight: 100
    });

    const globalState: GlobalStoreState = useContext<GlobalStoreState>(globalStore);
    const { dispatch } = globalState;

    useEffect(() => {

        // dispatch([{type: 'tableLoading', data: true}]);
        dispatch([{type: 'isLoading', data: true}])

        getPermits(facilityId, tableData.sortFilterState).then((res: PermitAPIResponse) => {
            // console.log('Permit Res', res);
            setTableData((prev: PermitTableState) => ({
                ...prev,
                colDefConfig: res.columns,
                rowData: [...res.permits]
            }));

            // dispatch([{type: 'tableLoading', data: false}]);
            dispatch([{type: 'isLoading', data: false}])
        })
        .catch(err => {
            console.log('Permit Err', err);
            // dispatch([{type: 'tableLoading', data: false}]);
            dispatch([{type: 'isLoading', data: false}])
        })
    }, [dispatch, facilityId, tableData.sortFilterState])

    // Method to sort columns and setting sort state
    const sort = (criteria: string): void => {
        setTableData(createTableStateForSort(criteria, tableData) as PermitTableState);
    }

    return (
        <Fragment>
            <div className="permit-table-wrapper">
                <div className="table-container">
                    <CustomTooltip title="Back">
                        <NavLink to='/' className="back-btn">
                            <ChevronLeftIcon/>
                        </NavLink>
                    </CustomTooltip>
                    <div className="table-title">Permits</div>
                    {
                        // globalState.state.tableLoading ?
                        // <AgGridSkeletonTable columnSize={14} groupColumnIndex={[7, 8]}/> :
                        tableData.rowData.length ?
                        <div>
                            <AgGridTable {...tableData} sort={sort}/>
                        </div>
                        : !globalState.state.isLoading ? <div>No Permit Table Data</div> : null
                    }
                </div>
            </div>
            <NotifierPopIn {...globalState.state.showNotifier}/>
        </Fragment>
    );
}

export default PermitTable;