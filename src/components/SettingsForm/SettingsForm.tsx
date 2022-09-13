import React from "react";
import { SearchInput } from "../SearchInput";
import {
  StyledContainer,
  StyledLabel,
  StyledTitle,
  StyledWrapper,
  InfoContainer
} from "./styles";

export const SettingsForm = () => {
  return (
    <StyledWrapper>
      <InfoContainer>
        <StyledTitle>Profile</StyledTitle>
        <StyledContainer>
          <StyledLabel>Name</StyledLabel>
          <SearchInput />
          <StyledLabel>Email</StyledLabel>
          <SearchInput />
        </StyledContainer>
      </InfoContainer>
      <InfoContainer>
        <StyledTitle>Password</StyledTitle>
        <StyledContainer>
          <StyledLabel>Password</StyledLabel>
          <SearchInput />
          <StyledLabel>New Password</StyledLabel>
          <SearchInput />
        </StyledContainer>
      </InfoContainer>
    </StyledWrapper>
  );
};
