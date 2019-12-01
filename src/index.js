import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./js/store/index";
import {ConnectedGoogleMapContainer} from './components/GoogleMap.js';
import SearchBarForm from "./components/SearchBar";
import {ResultsContent} from "./components/ResultsContent";
import App from "./components/App";
import Footer from "./components/Footer";
import Header from "./components/Header";


// https://www.valentinog.com/blog/redux/


ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>, document.getElementById('ip-app')

);



ReactDOM.render(
  <Provider store={store}>
  <Header/>
  </Provider>, document.getElementById('header')

);
ReactDOM.render(
  <Provider store={store}>
  <Footer/>
  </Provider>, document.getElementById('footer')

);


registerServiceWorker();
