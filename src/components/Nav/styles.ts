import { Link } from "react-router-dom";
import { S1 } from "../../ui/typography";
import { Color } from "../../ui/colors";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 160px;
  position: fixed;
  top: 70px;
  left: 50px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 100px;
`;

const Img = styled.img`
  margin: 0;
  padding-right: 20px;
`;

const StyledLink = styled(Link)`
  ${S1};
  color: ${Color.secondary};
`;

export { StyledNav, StyledLink, Img };
