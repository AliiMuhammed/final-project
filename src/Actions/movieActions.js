// // movieActions.js

// import axios from "axios";
// import { setLanguage } from "./languageActions"; // Import the action to set the language preference

// const API_KEY = "4aa3fd8db30994a6860649f1e8d70cd6";

// // Action types
// export const FETCH_NOW_PLAYING = "FETCH_NOW_PLAYING";
// export const FETCH_POPULAR = "FETCH_POPULAR";
// export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
// export const FETCH_UPCOMING = "FETCH_UPCOMING";

// // Action creators
// export const fetchNowPlaying = (page) => async (dispatch, getState) => {
//   const { language } = getState(); // Get the language preference from the Redux store

//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/now_playing`,
//       {
//         params: {
//           api_key: API_KEY,
//           page: page,
//           language, // Include language preference in the request
//         },
//       }
//     );
//     dispatch({ type: FETCH_NOW_PLAYING, payload: response.data.results });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchPopular = (page) => async (dispatch, getState) => {
//   const { language } = getState(); // Get the language preference from the Redux store

//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular`,
//       {
//         params: {
//           api_key: API_KEY,
//           page: page,
//           language, // Include language preference in the request
//         },
//       }
//     );
//     dispatch({ type: FETCH_POPULAR, payload: response.data.results });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchTopRated = (page) => async (dispatch, getState) => {
//   const { language } = getState(); // Get the language preference from the Redux store

//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/top_rated`,
//       {
//         params: {
//           api_key: API_KEY,
//           page: page,
//           language, // Include language preference in the request
//         },
//       }
//     );
//     dispatch({ type: FETCH_TOP_RATED, payload: response.data.results });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchUpcoming = (page) => async (dispatch, getState) => {
//   const { language } = getState(); // Get the language preference from the Redux store

//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/upcoming`,
//       {
//         params: {
//           api_key: API_KEY,
//           page: page,
//           language, // Include language preference in the request
//         },
//       }
//     );
//     dispatch({
//       type: FETCH_UPCOMING,
//       payload: response.data.results,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// movieActions.js
// import axios from "axios";

// const API_KEY = "4aa3fd8db30994a6860649f1e8d70cd6";

// export const FETCH_NOW_PLAYING = "FETCH_NOW_PLAYING";
// export const FETCH_POPULAR = "FETCH_POPULAR";
// export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
// export const FETCH_UPCOMING = "FETCH_UPCOMING";

// export const fetchNowPlaying = (page, language) => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/now_playing`,
//       {
//         params: {
//           api_key: API_KEY,
//           page: page,
//           language,
//         },
//       }
//     );
//     dispatch({ type: FETCH_NOW_PLAYING, payload: response.data.results });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchPopular = (page, language) => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular`,
//       {
//         params: {
//           api_key: API_KEY,
//           page: page,
//           language,
//         },
//       }
//     );
//     dispatch({ type: FETCH_POPULAR, payload: response.data.results });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchTopRated = (page, language) => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/top_rated`,
//       {
//         params: {
//           api_key: API_KEY,
//           page: page,
//           language,
//         },
//       }
//     );
//     dispatch({ type: FETCH_TOP_RATED, payload: response.data.results });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchUpcoming = (page, language) => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/upcoming`,
//       {
//         params: {
//           api_key: API_KEY,
//           page: page,
//           language,
//         },
//       }
//     );
//     dispatch({ type: FETCH_UPCOMING, payload: response.data.results });
//   } catch (error) {
//     console.error(error);
//   }
// };

// movieActions.js

import axios from "axios";
import { setLanguage } from "./languageActions";

const API_KEY = "4aa3fd8db30994a6860649f1e8d70cd6";

export const FETCH_NOW_PLAYING = "FETCH_NOW_PLAYING";
export const FETCH_POPULAR = "FETCH_POPULAR";
export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
export const FETCH_UPCOMING = "FETCH_UPCOMING";

export const fetchNowPlaying = (page, language) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          language: language, // Include language preference in the request
        },
      }
    );
    dispatch({ type: FETCH_NOW_PLAYING, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchPopular = (page, language) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          language: language, // Include language preference in the request
        },
      }
    );
    dispatch({ type: FETCH_POPULAR, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchTopRated = (page, language) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          language: language, // Include language preference in the request
        },
      }
    );
    dispatch({ type: FETCH_TOP_RATED, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

export const fetchUpcoming = (page, language) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,
      {
        params: {
          api_key: API_KEY,
          page: page,
          language: language, // Include language preference in the request
        },
      }
    );
    dispatch({ type: FETCH_UPCOMING, payload: response.data.results });
  } catch (error) {
    console.error(error);
  }
};

// Action to update APIs after changing the language
export const updateApisAfterLanguageChange =
  (page, language) => async (dispatch) => {
    dispatch(setLanguage(language)); // Update the language preference in the Redux store

    // Fetch data from APIs with the new language preference
    dispatch(fetchNowPlaying(page, language));
    dispatch(fetchPopular(page, language));
    dispatch(fetchTopRated(page, language));
    dispatch(fetchUpcoming(page, language));
  };
