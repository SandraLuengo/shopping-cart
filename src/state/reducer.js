const initialState = {
  token: false,
  questions: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.newValue
      };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.newValue
      };
    default:
      return state;
  }
};

export { initialState, reducer };
