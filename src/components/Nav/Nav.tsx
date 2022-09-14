import { ROUTE } from "../../router/routes";
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
      <CustomLink to={ROUTE.HOME}>
        <HomeIcon />
        <StyledText>Home</StyledText>
      </CustomLink>
      <CustomLink to={ROUTE.TRANDS}>
        <TrendsIcon />
        <StyledText>Trands</StyledText>
      </CustomLink>
      <CustomLink to={ROUTE.FAVORITES}>
        <FavoritesIcon />
        <StyledText>Favorites</StyledText>
      </CustomLink>
      <CustomLink to={ROUTE.SETTINGS}>
        <SettingsIcon />
        <StyledText>Settings</StyledText>
      </CustomLink>
    </StyledNav>
  );
};
