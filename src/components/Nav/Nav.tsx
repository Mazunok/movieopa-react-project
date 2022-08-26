import React from "react";
import { routes } from "../../router/routes";
import { Img, StyledLink, StyledNav } from "./styles";
import favorites from "../../assets/favorites.svg";
import home from "../../assets/home.svg";
import settings from "../../assets/settings.svg";
import trends from "../../assets/trends.svg";

export const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to={routes.HOME}>
        <Img src={home} alt="favorites-logo" />
        Home
      </StyledLink>
      <StyledLink to={routes.TRANDS}>
        <Img src={trends} alt="trends-logo" />
        Trands
      </StyledLink>
      <StyledLink to={routes.FAVORITES}>
        <Img src={favorites} alt="favorites-logo" />
        Favorites
      </StyledLink>
      <StyledLink to={routes.SETTINGS}>
        <Img src={settings} alt="settings-logo" />
        Settings
      </StyledLink>
      <StyledLink to={routes.SING_IN}>Sign in</StyledLink>
      <StyledLink to={routes.SING_UP}>Sign Up </StyledLink>
    </StyledNav>
  );
};
