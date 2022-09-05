import React from "react";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import styled from "styled-components";
import signupbackground from "../../assets/signupbackground.png";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <SignInForm />
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 45.65%
  );
  background: #000000 url(${signupbackground}) no-repeat center center;
  background-size: cover;
`;