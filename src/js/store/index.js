import { createStore, combineReducers } from "redux";
import rootReducer from "../reducers/index";


// Para los articulos
const store = createStore(rootReducer);
export default store;
