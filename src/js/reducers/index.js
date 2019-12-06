import {ADD_ARTICLE, SET_IP, SET_OWN_IP} from "../constants/action-types";
import { SET_LATLON } from "../constants/action-types";

const initialState = {
  articles: [],
  locationInfo: {},
  ipInfo: {},
  ownIpInfo: {}
};


function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      // articles: state.articles.concat(action.payload) // Para que se acumule en un array
      articles: [action.payload] // Para que se sobrescriba el array cada vez

    });
  }
  if (action.type === SET_LATLON) {
    return Object.assign({}, state, {
      // articles: state.articles.concat(action.payload) // Para que se acumule en un array
      locationInfo: action.payload // Para que se sobrescriba el array cada vez

    });
  }
  if (action.type === SET_IP) {
    return Object.assign({}, state, {
      // articles: state.articles.concat(action.payload) // Para que se acumule en un array
      ipInfo: action.payload // Para que se sobrescriba el array cada vez

    });
  }  if (action.type === SET_OWN_IP) {
    return Object.assign({}, state, {
      // articles: state.articles.concat(action.payload) // Para que se acumule en un array
      ownIpInfo: action.payload // Para que se sobrescriba el array cada vez

    });
  }

  return state;
}

export default rootReducer;
