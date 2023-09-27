import {
  FETCH_NOW_PLAYING,
  FETCH_POPULAR,
  FETCH_TOP_RATED,
  FETCH_UPCOMING,
} from '../Actions/movieActions';

const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOW_PLAYING:
      return { ...state, nowPlaying: action.payload };
    case FETCH_POPULAR:
      return { ...state, popular: action.payload };
    case FETCH_TOP_RATED:
      return { ...state, topRated: action.payload };
    case FETCH_UPCOMING:
      return { ...state, upcoming: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
