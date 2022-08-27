import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { StyledForm, Text, Input, Title, Button } from "./styles";

type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<SignInFormValues> = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign In</Title>
      <label>
        <Text>Email:</Text>
        <Input
          type="email"
          placeholder="Your email"
          {...register("email")}
        ></Input>
      </label>
      <label>
        <Text>Password:</Text>
        <Input
          type="password"
          placeholder="Your password"
          {...register("password")}
        ></Input>
      </label>
      <Button type="submit">Sign Up</Button>
      <Text>
        Already have an acount
        <Link to={`/${routes.SIGN_IN}`}>Sign In</Link>
      </Text>
    </StyledForm>
  );
};
