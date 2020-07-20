import shoppingCartReducer from "./shoppingCartReducer";

let mockProducts = {
  code: "TSHIRT",
  name: "Cabify T-Shirt",
  price: "20",
  image: "shirt.png",
  type: "Shirt",
};
describe("set shopping cart reducer", () => {
  it("should return the initial state", () => {
    expect(shoppingCartReducer(undefined, {})).toEqual({
      shoppingCart: [],
    });
  });

  it("initialState is correct", () => {
    const action = { type: "SET_SHOPPING_CART" };
    const initialState = { shoppingCart: [] };
    expect(shoppingCartReducer(undefined, action)).toEqual(initialState);
    //expect(shoppingCartReducer(undefined, action).contact).toMatchSnapshot();
  });
  it("returns the correct state", () => {
    const action = { type: "SET_SHOPPING_CART", payload: mockProducts };
    const expectedState = {
      shoppingCart: [
        {
          code: "TSHIRT",
          name: "Cabify T-Shirt",
          price: "20",
          image: "shirt.png",
          type: "Shirt",
        },
      ],
    };
    expect(shoppingCartReducer(undefined, action)).toEqual(expectedState);
    //expect(shoppingCartReducer(undefined, action)).toMatchSnapshot();
  });
});
