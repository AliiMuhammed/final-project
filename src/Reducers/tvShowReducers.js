// tvShowReducer.js
import {
  FETCH_AIRING_TODAY,
  FETCH_ON_THE_AIR,
  FETCH_POPULAR_TV,
  FETCH_TOP_RATED_TV,
} from "../Actions/tvShowActions";

const initialState = {
  airingToday: [],
  onTheAir: [],
  popularTV: [],
  topRatedTV: [],
};

const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AIRING_TODAY:
      return { ...state, airingToday: action.payload };
    case FETCH_ON_THE_AIR:
      return { ...state, onTheAir: action.payload };
    case FETCH_POPULAR_TV:
      return { ...state, popularTV: action.payload };
    case FETCH_TOP_RATED_TV:
      return { ...state, topRatedTV: action.payload };
    default:
      return state;
  }
};

export default tvShowReducer;
