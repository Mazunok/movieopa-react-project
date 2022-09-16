import styled from "styled-components";
import { Color } from "ui";
import { MEDIA } from "../../ui/media";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding: 40px 40px 0 40px;
  ${MEDIA.MD} {
    justify-content: space-around;
    align-items: center;
    padding-left: 30px;
  }
  ${MEDIA.SM} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
    align-items: center;
    gap: 20px;
    max-width: 275px;
    margin: 0 auto;
  }
`;

const BurgerButton = styled.div`
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

const LogoWrapper = styled.div`

`;
export { StyledHeader, LogoWrapper, BurgerButton };
