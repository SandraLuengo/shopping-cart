import styled from "styled-components";
import Button from "./Button";

export default styled(Button).attrs({})`
  &.countButton {
    padding: 0 8px;
    height: 40px;
    border: none;
    background: transparent;
    color: #7350ff;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
  }
  &.checkoutBtn {
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

  &.closeModal {
    background: none;
    color: #717285;
    font-size: 1.3rem;
    border: none;
    text-align: right;
    padding-bottom: 59px;
    &:hover {
      cursor: pointer;
    }
  }
`;
