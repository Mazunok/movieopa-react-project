import React from "react";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { StyledSignIn } from "./styles";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <SignInForm />
    </StyledSignIn>
  );
};
