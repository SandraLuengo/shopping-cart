import styled from "styled-components";
import Home from "./Home";
import background from "../../static/images/background.png";
export default styled(Home).attrs({})`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-image: url(${background});
  background-color: #212240;
  background-position: top left;
  background-size: cover;
`;
