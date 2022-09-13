import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { S2 } from "../../ui/typography";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 400px;
  padding: 10px;
  ${MEDIA.MD} {
    width: 250px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  border-radius: 20px;
`;

const Title = styled.h1`
  ${S2}
  color: ${Color.White};
`;

const Type = styled.p`
  padding-right: 15px;
  ${S2}
  font-weight: 500;
  color: ${Color.Light};
`;

const Year = styled.p`
  ${S2}
  font-weight: 500;
  color: ${Color.Light};
`;

export { Title, Type, Poster, Year, StyledLink, TextContainer };
