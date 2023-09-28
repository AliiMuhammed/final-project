import { SET_LANGUAGE } from "../Actions/languageActions";

const languageReducer = (state = "en-US", action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
