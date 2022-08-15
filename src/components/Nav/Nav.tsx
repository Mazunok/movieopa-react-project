import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.TRANDS}>Trands</Link>
      <Link to={routes.FAVORITES}>Favorites</Link>
      <Link to={routes.SETTINGS}>Settings</Link>
    </StyledNav>
  );
};
