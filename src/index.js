import React from 'react';
import ReactDOM from 'react-dom';
import IpLocator from "./components/IpLocator";
import {Provider} from "react-redux";
import store from "./js/store/index";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import registerServiceWorker from './registerServiceWorker';
import IpContent from "./components/IpContent";
import App from "./components/App";
import IntroductionText from "./components/IntroductionText";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('ip-app')
);


// ReactDOM.render(
//     <Provider store={store}>
//         <Header/>
//     </Provider>, document.getElementById('header')
// );

ReactDOM.render(
    <Provider store={store}>
        <Footer/>
    </Provider>, document.getElementById('footer')
);


registerServiceWorker();
