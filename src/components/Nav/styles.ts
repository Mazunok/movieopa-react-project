import { Color } from "../../ui/colors";
import styled from "styled-components";
import { MEDIA } from "../../ui/media";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
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
    display: none;
  }
`;

const Img = styled.img`
  padding-right: 20px;
  margin: 0;
`;

export { StyledNav, Img };
