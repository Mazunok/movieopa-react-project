import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";
import { S1 } from "../../ui/typography";

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  ${S1};
  color: ${Color.Secondary};
  text-decoration: none;
  &.active {
    color: ${Color.Primary};
  }
`;

export { StyledLink };
