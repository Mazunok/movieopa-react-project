import { useState } from "react";
import { SignUpForm } from "../../components/index";
import { Modal } from "../../components/Modal/Modal";
import { StyledSignUp } from "./styles";

export const SignUp = () => {
  const [isOpen, toggleModal] = useState<boolean>(false);

  const handleModal = () => {
    toggleModal((isOpen) => !isOpen);
  };

  return (
    <StyledSignUp>
      <SignUpForm />
      <Modal isOpen={isOpen} handleModal={handleModal} />
    </StyledSignUp>
  );
};
