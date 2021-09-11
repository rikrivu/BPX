import './CustomHeader.scss';

// 3rd Party Libraries
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CustomTooltip from '../../CustomTooltip/CustomTooltip';

function CustomHeader (props: any) {
    // console.log('Props Custom Header', props);
    return (
        <button type="button" className="header-btn" onClick={() => {props.sort(props.column.colId)}}>
            <div>{props.displayName}</div>
            {
                props.sortable ?
                <CustomTooltip title={
                    (props.sortState.criteria === props.column.colId && props.sortState.state === 'DESC')  ?
                    'Sort Ascending' : 'Sort Descending'
                }>
                    <div className="sort-icons">
                        {
                            props.sortState.criteria !== props.column.colId ?
                            <ArrowDropDownIcon className="sortIcon"/>
                            : null
                        }
                        {
                            props.sortState.criteria === props.column.colId && props.sortState.state === 'DESC' ?
                            <ArrowDropUpIcon className="sortIcon"/>
                            : null
                        }
                        {
                            props.sortState.criteria === props.column.colId &&  props.sortState.state === 'ASC' ?
                            <ArrowDropDownIcon className="sortIcon"/>
                            : null
                        }
                    </div>
                </CustomTooltip>
                : null
            }
        </button>
    );
}

export default CustomHeader;