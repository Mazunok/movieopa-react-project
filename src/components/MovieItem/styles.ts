import { Link } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { S2 } from "../../ui/typography";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 266px;
  height: 433px;
  ${MEDIA.MD} {
    width: 208px;
    height: 379px;
  }
  ${MEDIA.SM} {
    width: 272px;
    height: 437px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const Poster = styled.img`
  width: 266px;
  height: 357px;
  padding-bottom: 10px;
  border-radius: 20px;
  ${MEDIA.MD} {
    width: 208px;
    height: 279px;
  }
  ${MEDIA.SM} {
    width: 272px;
    height: 365px;
  }
`;

const Title = styled.h1`
  flex-grow: 3;
  ${S2}
`;

const Type = styled.p`
  justify-self: flex-end;
  padding-right: 15px;
  ${S2}
  font-weight: 500;
  color: ${Color.Light};
  ${(props: { isDarkTheme: boolean }) =>
    !props.isDarkTheme &&
    css`
      color: ${Color.Graphite};
    `}
`;

const Year = styled.p`
  ${S2}
  font-weight: 500;
  color: ${Color.Light};
  ${(props: { isDarkTheme: boolean }) =>
    !props.isDarkTheme &&
    css`
      color: ${Color.Graphite};
    `}
`;

const GlobalStyle = createGlobalStyle`
.dark .movieItem {
  color: ${Color.White};
}

.light .movieItem {
color: ${Color.Black};
}
`;

export { Title, Type, Poster, Year, StyledLink, TextContainer, GlobalStyle };
