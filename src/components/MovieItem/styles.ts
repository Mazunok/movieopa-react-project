import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { S2 } from "../../ui/typography";

const StyledLink = styled(Link) `
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 230px;
  height: 300px;
  ${MEDIA.MD}{
    width: 200px;
    height: 280px;
  }
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

export { Title, Type, Poster, Year, StyledLink, TextContainer };
