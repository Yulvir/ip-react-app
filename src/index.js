import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./js/store/index";
import {ConnectedGoogleMapContainer} from './components/GoogleMap.js';
import SearchBarForm from "./components/SearchBar";
import {ResultsContent} from "./components/ResultsContent";


// https://www.valentinog.com/blog/redux/


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


// Square – 250 x 250
// Small Square – 200 x 200
// Banner – 468 x 60
// Leaderboard – 728 x 90
// Inline Rectangle – 300 x 250
// Large Rectangle – 336 x 280
// Skyscraper – 120 x 600
// Wide Skyscraper – 160 x 600
// Half-Page Ad – 300 x 600
// Large Leaderboard – 970 x 90

registerServiceWorker();
