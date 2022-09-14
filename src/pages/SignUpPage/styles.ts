import styled from "styled-components";
import {Poster} from "../../assets";

const StyledSignUp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 45.65%
  );
  background: #000000 url(${Poster}) no-repeat center center;
  background-size: cover;
`;

export { StyledSignUp };
