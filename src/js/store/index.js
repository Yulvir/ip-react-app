import { createStore, combineReducers } from "redux";
import rootReducer from "../reducers/index";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'


// Para los articulos
const store = createStore(rootReducer);
export default store;
