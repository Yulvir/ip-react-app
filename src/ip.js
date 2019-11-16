import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./js/store/index";
import {ConnectedGoogleMapContainer} from './components/GoogleMap.js';
import SearchBarForm from "./components/SearchBar";
import {ResultsContent} from "./components/ResultsContent";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'




ReactDOM.render(

  <Provider store={store}>
  <ConnectedGoogleMapContainer/>
  </Provider>, document.getElementById('map-google')

);
ReactDOM.render(
  <Provider store={store}>
  <ResultsContent/>
  </Provider>, document.getElementById('results-content')

);

ReactDOM.render(
  <Provider store={store}>
  <SearchBarForm/>
  </Provider>, document.getElementById('search-bar')

);


registerServiceWorker();
