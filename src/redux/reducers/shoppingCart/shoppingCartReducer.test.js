import shoppingCartReducer from "./shoppingCartReducer";

let mockProducts = [
  {
    code: "TSHIRT",
    name: "Cabify T-Shirt",
    price: "20",
    image: "shirt.png",
    type: "Shirt",
  },
];

describe("set shopping cart reducer", () => {
  it("should return the initial state", () => {
    expect(shoppingCartReducer(undefined, {})).toEqual({
      shoppingCart: [],
    });
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
    expect(shoppingCartReducer([], action)).toEqual(expectedState);
  });
});
