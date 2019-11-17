import { ADD_ARTICLE } from "../constants/action-types";
import { SET_LATLON } from "../constants/action-types";

const initialState = {
  articles: [],
  latLon: {}
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
      latLon: action.payload // Para que se sobrescriba el array cada vez

    });
  }

  return state;
}

export default rootReducer;
