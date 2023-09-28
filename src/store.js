import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./Reducers/movieReducer";
import favoriteReducer from "./Reducers/favoriteReducer";
import tvShowReducer from "./Reducers/tvShowReducers";
import languageReducer from "./Reducers/languageReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
  tvShows: tvShowReducer,
  language: languageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
