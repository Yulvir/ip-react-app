import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// var express = require('express');
// Import the library:

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// var cors = require('cors');
//
// var app = express();
//
// // Then use it before your routes are set up:
// app.use(cors());
//
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });