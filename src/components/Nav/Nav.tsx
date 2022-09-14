import { ROUTES } from "../../router/routes";
import { StyledNav, StyledText } from "./styles";
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
      <CustomLink to={ROUTES.HOME}>
        <HomeIcon />
        <StyledText>Home</StyledText>
      </CustomLink>
      <CustomLink to={ROUTES.TRANDS}>
        <TrendsIcon />
        <StyledText>Trands</StyledText>
      </CustomLink>
      <CustomLink to={ROUTES.FAVORITES}>
        <FavoritesIcon />
        <StyledText>Favorites</StyledText>
      </CustomLink>
      <CustomLink to={ROUTES.SETTINGS}>
        <SettingsIcon />
        <StyledText>Settings</StyledText>
      </CustomLink>
    </StyledNav>
  );
};
