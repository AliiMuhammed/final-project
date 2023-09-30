import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./Reducers/movieReducer";
import favoriteReducer from "./Reducers/favoriteReducer";
import languageReducer from "./Reducers/languageReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
  language: languageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
