import { Link } from "react-router-dom";
import { S1 } from "../../ui/typography";
import { Color } from "../../ui/colors";
import styled from "styled-components";
import { MEDIA } from "../../ui/media";

const StyledNav = styled.nav`
  width: 160px;
  height: 100%;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 50px 30px 0px 30px;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 50px;
  ${MEDIA.MD} {
    display: none;
  }
`;

const Img = styled.img`
  margin: 0;
  padding-right: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  ${S1};
  color: ${Color.secondary};
`;

export { StyledNav, StyledLink, Img};
