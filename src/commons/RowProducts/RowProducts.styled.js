import styled from "styled-components";
import RowProducts from "./RowProducts";

export default styled(RowProducts).attrs({})`
  display: flex;
  margin-bottom: 32px;
  .productList {
    &__row {
      &__detail {
        width: 45%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: transform 0.2s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: scale(1.02);
        }
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
      &__price,
      &__total {
        color: #000000;
        font-size: 16px;
      }
    }
  }
`;
