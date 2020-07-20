import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHOPPING_CART":
      return {
        ...state,
        shoppingCart: action.payload,
      };
    default:
      return state;
  }
};
