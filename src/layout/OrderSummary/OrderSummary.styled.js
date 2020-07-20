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
  }
`;
