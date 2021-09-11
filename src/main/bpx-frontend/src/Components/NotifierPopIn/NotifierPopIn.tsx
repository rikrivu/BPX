import './NotifierPopIn.scss';
import ClearIcon from '@material-ui/icons/Clear';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { Fragment } from 'react';

function NotifierPopIn (props: {show: 'initial' | 'start' | 'end', type: 'success' | 'fail' | null}) {
    return (
        <div className={`notifier-container${
                props.show === 'start' ? ' notifier-start slideIn' : props.show === 'end' ? ' notifier-end slideOut' : ''
            }${
                props.type === 'success' ? ' notify-success': props.type === 'fail' ? ' notify-fail' : ''
            }`}
        >
            
            {
                props.type === 'success' ?
                <Fragment>
                    <SaveAltIcon/>File downloaded Successfully.
                </Fragment>
                : props.type === 'fail' ?
                <Fragment>
                    <ClearIcon/>File currently not available.
                </Fragment>
                : null
            }
        </div>
    );
}

export default NotifierPopIn;