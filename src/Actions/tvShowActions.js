// tvShowActions.js
import axios from "axios";

const API_KEY = "4aa3fd8db30994a6860649f1e8d70cd6";

// Action types
export const FETCH_AIRING_TODAY = "FETCH_AIRING_TODAY";
export const FETCH_ON_THE_AIR = "FETCH_ON_THE_AIR";
export const FETCH_POPULAR_TV = "FETCH_POPULAR_TV";
export const FETCH_TOP_RATED_TV = "FETCH_TOP_RATED_TV";

// Action creators
export const fetchAiringToday = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`
    );
    dispatch({ type: FETCH_AIRING_TODAY, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchOnTheAir = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`
    );
    dispatch({ type: FETCH_ON_THE_AIR, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchPopularTV = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
    );
    dispatch({ type: FETCH_POPULAR_TV, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchTopRatedTV = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
    );
    dispatch({ type: FETCH_TOP_RATED_TV, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};
