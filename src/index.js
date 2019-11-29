import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./components/App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
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
