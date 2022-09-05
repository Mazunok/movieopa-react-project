import React from "react";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import styled from "styled-components";
import signupbackground from "../../assets/signupbackground.png";

export const SignUp = () => {
  return (
    <StyledSignUp>
      <SignUpForm />
    </StyledSignUp>
  );
};

const StyledSignUp = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background:linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 45.65%);
  background: #000000 url(${signupbackground}) no-repeat center center;
  background-size: cover;
`;
