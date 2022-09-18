import { ROUTE } from "../../router/routes";
import { ImgWrapper, StyledNav, StyledText } from "./styles";
import { CustomLink } from "../CustomLink/CustomLink";
import { RiHomeHeartFill, RiSettings4Line, RiHeartLine, RiMedalLine } from "react-icons/ri";
import { useWindowSize } from "hooks";
import { useState } from "react";
import { BurgerButton } from "components/BurgerButton/BurgerButton";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width = 0 } = useWindowSize();

  const mobile = {
    open: { x: "0" },
    closed: { x: "-100%" },
  };

  const desctop = {
    open: { x: "0" },
    closed: { x: "0" },
  };

  const variants = width < 768 ? mobile : desctop;

  return (
    <>
      <StyledNav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "tween" }}
      >
        <CustomLink to={ROUTE.HOME}>
          <ImgWrapper>
            <RiHomeHeartFill />
          </ImgWrapper>
          <StyledText>Home</StyledText>
        </CustomLink>
        <CustomLink to={ROUTE.TRANDS}>
          <ImgWrapper>
            <RiMedalLine />
          </ImgWrapper>
          <StyledText>Trands</StyledText>
        </CustomLink>
        <CustomLink to={ROUTE.FAVORITES}>
          <ImgWrapper>
            <RiHeartLine />
          </ImgWrapper>
          <StyledText>Favorites</StyledText>
        </CustomLink>
        <CustomLink to={ROUTE.SETTINGS}>
          <ImgWrapper>
            <RiSettings4Line />
          </ImgWrapper>
          <StyledText>Settings</StyledText>
        </CustomLink>
      </StyledNav>
      {width < 768 && <BurgerButton onClick={() => setIsOpen((isOpen) => !isOpen)} />}
    </>
  );
};
