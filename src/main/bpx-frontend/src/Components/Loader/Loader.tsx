import './Loader.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loader () {
    return <div className="loader-wrapper"><CircularProgress/></div>;
}

export default Loader;