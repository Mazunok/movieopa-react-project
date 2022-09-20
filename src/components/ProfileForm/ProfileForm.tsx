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
import { getUser, useAppSelector } from "store";

interface IProps {
  name?: string | null;
}

export const ProfileForm = ({ name }: IProps) => {
  const [isOpen, toggleModal] = useState<boolean>(false);
  const { isDarkTheme } = useAppSelector(getUser);

  const handleModal = () => {
    toggleModal((isOpen) => !isOpen);
  };

  return (
    <StyledContainer isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
      <ProfileContainer>
        <Avatar>
          <AvatarName>N S</AvatarName>
        </Avatar>
        <ProfileName>{name ? name : "Sign in"}</ProfileName>
        <ArrowBtn onClick={handleModal}>
          <ArrowIcon />
        </ArrowBtn>
      </ProfileContainer>
      {isOpen && <ModalProfile name={name} isOpen={isOpen} handleModal={handleModal} />}
    </StyledContainer>
  );
};
