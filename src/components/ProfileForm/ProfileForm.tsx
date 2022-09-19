import {
  ArrowBtn,
  Avatar,
  AvatarName,
  ProfileName,
  StyledContainer,
  ProfileContainer,
} from "./styles";
import { ArrowIcon } from "../../assets";
import { ModalProfile } from "components/ModalProfile/ModalProfile";
import { useState } from "react";

interface IProps {
  name?: string | null;
}

export const ProfileForm = ({ name }: IProps) => {
  const [isOpen, toggleModal] = useState<boolean>(false);

  const handleModal = () => {
    toggleModal((isOpen) => !isOpen);
  };

  return (
    <StyledContainer>
      <ProfileContainer>
        <Avatar>
          <AvatarName>N S</AvatarName>
        </Avatar>
        <ProfileName>{name ? name : "Sign in"}</ProfileName>
        <ArrowBtn onClick={handleModal}>
          <ArrowIcon />
        </ArrowBtn>
      </ProfileContainer>
      {isOpen && <ModalProfile isOpen={isOpen} handleModal={handleModal} />}
    </StyledContainer>
  );
};
