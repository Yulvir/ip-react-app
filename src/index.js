import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./js/store/index";

// var express = require('express');
// Import the library:

ReactDOM.render(

  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root')

);
registerServiceWorker();
