import ReactPaginate from 'react-paginate';
import './Paginator.scss';
import { PaginatorModel, SelectedPage } from './paginatorModels';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

function Paginator (props: PaginatorModel) {

    const previousButton: JSX.Element = (
        <button type="button" className="paginator-nav-btn">
            <KeyboardArrowLeftIcon className="paginator-icon"/>
        </button>
    );

    const nextButton: JSX.Element = (
        <button type="button" className="paginator-nav-btn">
            <KeyboardArrowRightIcon className="paginator-icon"/>
        </button>
    );

    return (
        <Fragment>
            <div style={{display: props.loading ? 'none' : undefined}}>
                <ReactPaginate
                    pageCount={props.pageSize}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={2}
                    initialPage={0}
                    previousLabel={previousButton}
                    nextLabel={nextButton}
                    breakLabel={<SettingsEthernetIcon/>}
                    containerClassName="paginator-container"
                    breakClassName="page-link"
                    breakLinkClassName="break-link"
                    pageLinkClassName="page-link"
                    activeClassName="page-link-selected"
                    onPageChange={(selectedPage: SelectedPage) => {props.changePage(selectedPage)}}
                ></ReactPaginate>
            </div>
            {
                props.loading ? <div className="skeleton-wrapper"><Skeleton variant="rect" width={300} height={30}/></div> : null
            }
        </Fragment>
    );

}

export default Paginator;