import styled from "styled-components";
import ProductModal from "./ProductModal";

export default styled(ProductModal).attrs({})`
  position: absolute;
  align-items: center;
  display: flex;
  align-items: flex-start;
  z-index: -10;
  max-width: 1088px;
  max-height: 648px;
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  border-radius: 4px;
  background-color: #ffffff;
  animation: ${({ toggleModal }) => (toggleModal ? "fadeIn" : "fadeOut")} 0.5s
    forwards ease-in-out;
  .productModal {
    &__img {
      width: 70%;
      height: 100%;
      border-right: 2px solid #f4f4f4;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__description {
      width: 30%;
      max-width: 30%;
      display: flex;
      flex-direction: column;
      height: 72%;
      justify-content: space-around;
      padding: 0 32px 0 32px;
      &__product {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
      }
      &__product,
      &__description {
        border-bottom: 1px solid rgba(33, 34, 64, 0.16);
        padding-bottom: 16px;
      }
      &__description {
        font-size: 13px;
        text-align: left;
      }
      &__code {
        color: #a6a7b3;
        letter-spacing: 0.13px;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        text-align: left;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      z-index: 10;
    }
    100% {
      opacity: 1;
      z-index: 10;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
      z-index: 10;
    }
    100% {
      opacity: 0;
      z-index: 0;
    }
  }
`;
