import styled from "styled-components";
import AddProduct from "./AddProduct";

export default styled(AddProduct).attrs({})`
  display: flex;
  .product__quantity {
    width: 40px;
    height: 40px;
    border: 2px solid #dbdbe0;
    border-radius: 4px;
    text-align: center;
  }
`;
