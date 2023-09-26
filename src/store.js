import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./Reducers/movieReducer"; // Adjust the import path
import favoriteReducer from "./Reducers/favoriteReducer"; // Adjust the import path

const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
