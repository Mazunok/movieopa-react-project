import styled from "styled-components";
import { Color } from "ui";
import { Poster } from "../../assets";

const StyledSignIn = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 45.65%);
  background: ${Color.Black} url(${Poster}) no-repeat center center;
  background-size: cover;
`;

export { StyledSignIn };
