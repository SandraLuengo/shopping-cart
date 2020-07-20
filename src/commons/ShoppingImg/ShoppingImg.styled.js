import styled from "styled-components";
import ShoppingImg from "./ShoppingImg";

export default styled(ShoppingImg).attrs({})`
  display: flex;
  .productImg {
    border: 1px solid #cacad1;
    border-radius: 4px;
    margin-right: 16px;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    &__name {
      font-size: 16px;
      line-height: 24px;
      color: #7350ff;
      text-transform: none;
      font-weight: bold;
    }
    &__code {
      border-radius: 4px;
      color: #a6a7b3;
      letter-spacing: 0.13px;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-transform: none;
    }
  }
`;
