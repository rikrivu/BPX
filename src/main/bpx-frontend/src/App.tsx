import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loader from './Components/Loader/Loader';
import { GlobalStoreState, globalStore } from './GlobalStore/GlobalStore';
import Home from './Views/Home/Home';
import PDFViewer from './Views/PDFViewer/PDFViewer';
import PermitTable from './Views/PermitTable/PermitTable';

function App() {
  
  const globalState: GlobalStoreState = useContext<GlobalStoreState>(globalStore);
  // console.log('From App', globalState)
  
  return (
    <Fragment>

      {globalState.state.isLoading && <Loader/>}

        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/permits/:facilityId' component={PermitTable}></Route>
            <Route exact path='/pdf/:facilityId/:permitId' component={PDFViewer}></Route>
            <Route exact path='/pdfByFileName/:fileName' component={PDFViewer}></Route>
          </Switch>
      </Router>

    </Fragment>
  );
}

export default App;
