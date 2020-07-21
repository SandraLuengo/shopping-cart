import styled from "styled-components";
import ShoppingCart from "./ShoppingCart";

export default styled(ShoppingCart).attrs({})`
  width: 65%;
  height: 100%;
  border-radius: 4px 0 0 4px;
  padding: 40px 32px 40px 56px;
  z-index: 1;
  .title {
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(33, 34, 64, 0.16);
    letter-spacing: -0.18px;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
  }
  .product {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 32px 0;
    color: #a6a7b3;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    line-height: 16px;
    &.productList {
      flex-direction: column;
    }
    &__row {
      display: flex;
      list-style: none;
      width: 100%;
      &__detail {
        width: 45%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      &__quantity,
      &__price {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__total {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
