import styled from "styled-components";
import { Color } from "../../ui/colors";
import { S2 } from "../../ui/typography";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 230px;
  height: 280px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Poster = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
`;

const Title = styled.h1`
  ${S2}
  color: ${Color.White};
`;

const Type = styled.p`
  ${S2}
  font-weight: 500;
  color: ${Color.Light};
  padding-right: 15px;
`;

const Year = styled.p`
  ${S2}
  font-weight: 500;
  color: ${Color.Light};
`;

export { Title, Type, Poster, Year, CardContainer, TextContainer };
