import React from "react";
import { StyledContainer, Title, Text, InfoContainer } from "./styles";

export const Settings = () => {
  return (
    <StyledContainer>
      <Title>Profile Info</Title>
      <InfoContainer>
        <Text>Profile Name:</Text>
        <Text>Profile Id:</Text>
        <Text>Email:</Text>
      </InfoContainer>
    </StyledContainer>
  );
};