import React from "react";
import { ROUTES } from "../../router/routes";
import { CustomLink } from "../CustomLink";
import { Portal, PortalTarget } from "../Portal/Portal";
import { ModalContainer, ModalText, ModalTitle, ModalWrapper } from "./styles";

interface IProps {
  isOpen: boolean;
  handleModal: () => void;
}

export const Modal = ({ isOpen, handleModal }: IProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <ModalWrapper onClick={handleModal}>
        <ModalContainer>
          <ModalTitle>🎊 CONGRATULATION 🎊</ModalTitle>
          <ModalText>You successfully sign up</ModalText>
          <CustomLink to={ROUTES.SIGN_IN}>Sign In</CustomLink>
        </ModalContainer>
      </ModalWrapper>
    </Portal>
  ) : null;
};
