import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./js/store/index";
import {ConnectedGoogleMapContainer} from './components/GoogleMap.js';


// https://www.valentinog.com/blog/redux/


ReactDOM.render(

  <Provider store={store}>
  <ConnectedGoogleMapContainer/>

  </Provider>, document.getElementById('root')

);
registerServiceWorker();
