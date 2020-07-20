import React from "react";
import configureStore from "redux-mock-store";
import { setCartAction } from "./shoppingCartActions";

const mockStore = configureStore();
const store = mockStore();

describe("set shopping cart actions", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        type: "SET_SHOPPING_CART",
        payload: "[]",
      },
    ];
    store.dispatch(setCartAction("[]"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
