import axios from "axios";
import { setLanguage } from "./languageActions";

const API_KEY = "4aa3fd8db30994a6860649f1e8d70cd6";

export const FETCH_NOW_PLAYING = "FETCH_NOW_PLAYING";
export const FETCH_POPULAR = "FETCH_POPULAR";
export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
export const FETCH_UPCOMING = "FETCH_UPCOMING";
export const FETCH_SEARCH = "FETCH_SEARCH";



export const fetchNowPlaying = (page) => async (dispatch, getState) => {
  const { language } = getState();

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          language,
        },
      }
    );
    dispatch({ type: FETCH_NOW_PLAYING, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchPopular = (page) => async (dispatch, getState) => {
  const { language } = getState(); 

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          language,
        },
      }
    );
    dispatch({ type: FETCH_POPULAR, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchTopRated = (page) => async (dispatch, getState) => {
  const { language } = getState(); 

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          language,
        },
      }
    );
    dispatch({ type: FETCH_TOP_RATED, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchUpcoming = (page) => async (dispatch, getState) => {
  const { language } = getState();

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          language,
        },
      }
    );
    dispatch({ type: FETCH_UPCOMING, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearch = (page, query) => async (dispatch, getState) => {
  const { language } = getState(); 

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          query: query,
          language, 
        },
      }
    );
    dispatch({
      type: FETCH_SEARCH,
      payload: response.data.results,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateApisAfterLanguageChange =
  (page, language) => async (dispatch) => {
    dispatch(setLanguage(language));
    dispatch(fetchNowPlaying(page, language));
    dispatch(fetchPopular(page, language));
    dispatch(fetchTopRated(page, language));
    dispatch(fetchUpcoming(page, language));
  };
