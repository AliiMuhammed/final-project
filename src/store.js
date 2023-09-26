import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./Reducers/movieReducer"; // Adjust the import path
import favoriteReducer from "./Reducers/favoriteReducer"; // Adjust the import path
import tvShowReducer from "./Reducers/tvShowReducers"; // Import the tvShowReducer

const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
  tvShows: tvShowReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
