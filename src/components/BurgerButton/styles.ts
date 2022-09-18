import styled from "styled-components";
import { Color, MEDIA } from "ui";

interface IProps {
  isOpen?: boolean;
}

const StyledButton = styled.div<IProps>`
  ${MEDIA.MD} {
    position: fixed;
    top: 130px;
    right: 50%;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
    background: transparent;
    width: 25px;
    height: 25px;
    margin-left: 20px;
  }
  ${MEDIA.SM} {
    top: 200px;
  }

  div {
    display: flex;
    width: 35px;
    height: 2px;
    background: ${Color.White};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(0)")};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export { StyledButton };
