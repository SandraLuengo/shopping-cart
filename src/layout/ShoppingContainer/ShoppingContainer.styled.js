import styled from "styled-components";
import ShoppingContainer from "./ShoppingContainer";

export default styled(ShoppingContainer).attrs({})`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1088px;
  max-height: 648px;
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  border-radius: 4px;
  background-color: #ffffff;
`;
