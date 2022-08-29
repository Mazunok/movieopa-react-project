import React from "react";
import {ROUTES } from "../../router/routes";
import { Img, StyledLink, StyledNav } from "./styles";
import favorites from "../../assets/favorites.svg";
import home from "../../assets/home.svg";
import settings from "../../assets/settings.svg";
import trends from "../../assets/trends.svg";

export const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to={ROUTES.HOME}>
        <Img src={home} alt="favorites-logo" />
        Home
      </StyledLink>
      <StyledLink to={ROUTES.TRANDS}>
        <Img src={trends} alt="trends-logo" />
        Trands
      </StyledLink>
      <StyledLink to={ROUTES.FAVORITES}>
        <Img src={favorites} alt="favorites-logo" />
        Favorites
      </StyledLink>
      <StyledLink to={ROUTES.SETTINGS}>
        <Img src={settings} alt="settings-logo" />
        Settings
      </StyledLink>
      <StyledLink to={ROUTES.SIGN_IN}>Sign in</StyledLink>
      <StyledLink to={ROUTES.SIGN_UP}>Sign Up </StyledLink>
    </StyledNav>
  );
};
