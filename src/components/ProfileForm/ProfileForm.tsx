import React from "react";
import {
  ArrowBtn,
  Avatar,
  AvatarName,
  BurgerButton,
  ProfileName,
  StyledContainer,
  BurgerContainer,
} from "./styles";
import arrow from "../../assets/arrow.svg";

export const ProfileForm = () => {
  return (
    <StyledContainer>
      <Avatar>
        <AvatarName>N M</AvatarName>
      </Avatar>
      <ProfileName>Nastya Mazun</ProfileName>
      <ArrowBtn>
        <img src={arrow} alt="arrow"></img>
      </ArrowBtn>
      <BurgerContainer>
        <BurgerButton />
      </BurgerContainer>
    </StyledContainer>
  );
};
