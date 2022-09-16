import { Color } from "../../ui/colors";
import styled from "styled-components";
import { MEDIA } from "../../ui/media";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  gap: 50px;
  width: 160px;
  height: 100%;
  padding: 50px 30px 0px 30px;
  background-color: ${Color.Black};
  ${MEDIA.MD} {
    display: flex;
    gap: 10px;
    position: fixed;
    left: 0;
    bottom: 0;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: calc(100vh-56px);
    background-color: ${Color.Light};
  }
`;

const StyledText = styled.p`
  padding-left: 20px;
  font-family: "Exo 2";
`;

const ImgWrapper = styled.div`
  width: 18px;
  height: 18px;
`;

const BurgerButton = styled.div`
  z-index: 1;
  position: relative;
  left: 15px;
  display: none;
  width: 24px;
  height: 24px;
  background-color: ${Color.Primary};
  border-top: 2px solid ${Color.White};
  border-bottom: 2px solid ${Color.White};
  ::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 0px;
    width: 100%;
    border-top: 2px solid ${Color.White};
  }
  ${MEDIA.MD} {
    display: block;
  }
`;

const BurgerContainer = styled.button`
  z-index: 2;
  display: none;
  width: 56px;
  height: 56px;
  background: ${Color.Primary};
  border-radius: 10px;
  ${MEDIA.MD} {
    display: block;
  }
`;

export { StyledNav, StyledText, ImgWrapper, BurgerButton, BurgerContainer };
