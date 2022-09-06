import styled from "styled-components";
import { Color } from "../../ui/colors";
import { H1, H3 } from "../../ui/typography";

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.Primary};
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
`;

const Title = styled.h1`
  ${H1}
  color: ${Color.Black};
  padding-top: 50px;
`;

const Text = styled.p`
  ${H3}
  color: ${Color.Black};
  padding-left: 200px;
`;

export { StyledContainer, Title, Text, InfoContainer };
