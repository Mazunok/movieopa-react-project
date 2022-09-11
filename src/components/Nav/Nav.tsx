import { ROUTES } from "../../router/routes";
import { Img, StyledNav } from "./styles";
import favorites from "../../assets/favorites.svg";
import home from "../../assets/home.svg";
import settings from "../../assets/settings.svg";
import trends from "../../assets/trends.svg";
import movieopa from "../../assets/movieOpa.svg";
import { CustomLink } from "../CustomLink/CustomLink";

export const Nav = () => {
  return (
    <StyledNav>
      <Img src={movieopa} alt="logo" />
      <CustomLink to={ROUTES.HOME}>
        <Img src={home} alt="favorites logo" />
        <p>Home</p>
      </CustomLink>
      <CustomLink to={ROUTES.TRANDS}>
        <Img src={trends} alt="trends logo" />
        <p>Trands</p>
      </CustomLink>
      <CustomLink to={ROUTES.FAVORITES}>
        <Img src={favorites} alt="favorites logo" />
        <p>Favorites</p>
      </CustomLink>
      <CustomLink to={ROUTES.SETTINGS}>
        <Img src={settings} alt="settings logo" />
        <p>Settings</p>
      </CustomLink>
      <CustomLink to={ROUTES.USER_INFO}>
        <p>User Info</p>
      </CustomLink>
    </StyledNav>
  );
};
