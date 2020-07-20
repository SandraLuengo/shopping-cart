import styled from "styled-components";
import OrderSummary from "./OrderSummary";

export default styled(OrderSummary).attrs({})`
  width: 35%;
  height: 100%;
  border-radius: 0 4px 4px 0;
  display: flex;
  flex-flow: column wrap;
  padding: 40px 32px;
  background-color: #f3f3f3;
  color: #212240;
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
  .totalItems {
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
    border-bottom: 1px solid rgba(33, 34, 64, 0.16);
    &__price {
      font-weight: bold;
    }
  }
  .discounts {
    &__title {
      text-align: left;
      color: #717285;
      letter-spacing: 0;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
    }
    &__row {
      display: flex;
      justify-content: space-between;
      &__price {
        font-weight: bold;
      }
    }
  }
  .totalPrice {
    border-top: 1px solid rgba(33, 34, 64, 0.16);
    margin-top: auto;
    &__total {
      display: flex;
      justify-content: space-between;
      &__text {
        text-transform: uppercase;
        font-size: 14px;
        line-height: 17px;
      }
      &__number {
        font-size: 20px;
        line-height: 25px;
        font-weight: bold;
      }
    }
    &__checkoutBtn {
      margin-top: 24px;
      padding-top: 16px;
      padding-bottom: 16px;
      width: 100%;
      border-radius: 4px;
      background: #7350ff;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      line-height: 14px;
      cursor: pointer;
      border: none;
      transition: background 0.3s ease-in-out;
      &:hover {
        background: #4d36a7;
      }
    }
  }
`;
