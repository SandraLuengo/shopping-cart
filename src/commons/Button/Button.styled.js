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
`;
