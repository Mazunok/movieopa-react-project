import styled from "styled-components";
import { Color } from "../../ui/colors";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: row;
  background-color: ${Color.black};
`;

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

export { Wrapper, Container };
