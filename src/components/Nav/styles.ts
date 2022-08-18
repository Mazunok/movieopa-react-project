import { Link } from "react-router-dom";
import { S1 } from "../../ui/typography";
import { Color } from "../../ui/colors";
import styled from "styled-components";

const StyledNav = styled.nav`
  height: 100vh;
  width: 160px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  ${S1};
  color: ${Color.secondary};
`;

export { StyledNav, StyledLink };
