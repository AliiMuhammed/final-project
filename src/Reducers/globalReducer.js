const initialState = {
  rerenderFlag: false, 
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RERENDER_ALL_COMPONENTS":
      return {
        ...state,
        rerenderFlag: !state.rerenderFlag,
      };
    default:
      return state;
  }
};

export default globalReducer;
