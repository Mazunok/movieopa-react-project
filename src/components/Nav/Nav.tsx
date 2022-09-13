import { ROUTES } from "../../router/routes";
import { StyledNav } from "./styles";
import {
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
  MovieopaIcon,
} from "../../assets";
import { CustomLink } from "../CustomLink/CustomLink";

export const Nav = () => {
  return (
    <StyledNav>
      <MovieopaIcon />
      <CustomLink to={ROUTES.HOME}>
        <HomeIcon />
        <p>Home</p>
      </CustomLink>
      <CustomLink to={ROUTES.TRANDS}>
        <TrendsIcon />
        <p>Trands</p>
      </CustomLink>
      <CustomLink to={ROUTES.FAVORITES}>
        <FavoritesIcon />
        <p>Favorites</p>
      </CustomLink>
      <CustomLink to={ROUTES.SETTINGS}>
        <SettingsIcon />
        <p>Settings</p>
      </CustomLink>
    </StyledNav>
  );
};
