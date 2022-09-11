import React from "react";
import { StyledContainer, Title, Text, InfoContainer } from "./styles";
import { getAuth, signOut } from "firebase/auth";


export const UserInfo = () => {
  return (
    <StyledContainer>
      <Title>Profile Info</Title>
      <InfoContainer>
        <Text>Profile Name:</Text>
        <Text>Profile Id:</Text>
        <Text>Email:</Text>
      </InfoContainer>
      <button onClick={
        const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});}>sign out</button>
    </StyledContainer>
  );
};
