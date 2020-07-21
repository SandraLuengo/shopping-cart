import React from "react";
import { shallow, mount } from "enzyme";
import AddProduct from "./AddProduct.styled";

describe("<Image/>", () => {
  it("renders correctly", () => {
    shallow(<AddProduct />);
  });
});
