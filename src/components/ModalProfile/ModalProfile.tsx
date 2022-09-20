import { ROUTE } from "../../router/routes";
import { CustomLink } from "../CustomLink";
import { Portal, PortalTarget } from "../Portal/Portal";
import { ModalContainer, ModalWrapper } from "./styles";

interface IProps {
  isOpen: boolean;
  handleModal: () => void;
}

interface IProps {
  name?: string | null;
}

export const ModalProfile = ({ isOpen, handleModal, name }: IProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <ModalWrapper onClick={handleModal}>
        <ModalContainer>
          <CustomLink to={name ? ROUTE.SETTINGS : ROUTE.SIGN_IN}>
            {name ? "Edit profile" : "Sign In"}
          </CustomLink>
          <CustomLink to={name ? ROUTE.LOG_OUT : ROUTE.SIGN_UP}>
            {name ? "Log Out" : "Sign Up"}
          </CustomLink>
        </ModalContainer>
      </ModalWrapper>
    </Portal>
  ) : null;
};
