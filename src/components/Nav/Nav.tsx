import React from "react";
import { routes } from "../../router/routes";
import { StyledLink, StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to={routes.HOME}>Home</StyledLink>
      <StyledLink to={routes.TRANDS}>Trands</StyledLink>
      <StyledLink to={routes.FAVORITES}>Favorites</StyledLink>
      <StyledLink to={routes.SETTINGS}>Settings</StyledLink>
    </StyledNav>
  );
};
