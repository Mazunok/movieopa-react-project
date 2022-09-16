import { ROUTE } from "../../router/routes";
import { BurgerButton, BurgerContainer, ImgWrapper, StyledNav, StyledText } from "./styles";
import { FavoritesIcon, HomeIcon, TrendsIcon, SettingsIcon } from "../../assets";
import { CustomLink } from "../CustomLink/CustomLink";
import { useState } from "react";
import { useWindowSize } from "hooks";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width = 0 } = useWindowSize();

  const menuVariants = {
    open: { x: "0" },
    closed: { x: "0" },
  };

  return (
    <>
      <StyledNav initial="closed" animate={isOpen ? "open" : "closed"} variants={menuVariants}>
        <CustomLink to={ROUTE.HOME}>
          <ImgWrapper>
            <HomeIcon />
          </ImgWrapper>
          <StyledText>Home</StyledText>
        </CustomLink>
        <CustomLink to={ROUTE.TRANDS}>
          <ImgWrapper>
            <TrendsIcon />
          </ImgWrapper>
          <StyledText>Trands</StyledText>
        </CustomLink>
        <CustomLink to={ROUTE.FAVORITES}>
          <ImgWrapper>
            <FavoritesIcon />
          </ImgWrapper>
          <StyledText>Favorites</StyledText>
        </CustomLink>
        <CustomLink to={ROUTE.SETTINGS}>
          <ImgWrapper>
            <SettingsIcon />
          </ImgWrapper>
          <StyledText>Settings</StyledText>
        </CustomLink>
      </StyledNav>
      {width < 768 && (
        <BurgerContainer>
          <BurgerButton onClick={() => setIsOpen((isOpen) => !isOpen)} />
        </BurgerContainer>
      )}
    </>
  );
};
