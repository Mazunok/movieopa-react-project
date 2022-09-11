import styled from "styled-components";
import { Color } from "../../ui/colors";
import { H1, H3 } from "../../ui/typography";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${Color.Primary};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  padding-top: 50px;
  ${H1}
  color: ${Color.Black};
`;

const Text = styled.p`
  padding-left: 200px;
  ${H3}
  color: ${Color.Black};
`;

export { StyledContainer, Title, Text, InfoContainer };
