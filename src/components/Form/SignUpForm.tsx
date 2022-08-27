import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { Text, Input, Title, Button, StyledForm } from "./styles";

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    console.log(name, email, password, confirmPassword);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign Up</Title>
      <label>
        <Text>Name:</Text>
        <Input
          type="name"
          placeholder="Your name"
          {...register("name")}
        ></Input>
      </label>
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
      <label>
        <Text>Confirm password:</Text>
        <Input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        ></Input>
      </label>
      <Button type="submit">SingUp</Button>
      <Text>
        Already have an acount
        <Link to={`/${routes.SIGN_IN}`}>Sign Up</Link>
      </Text>
    </StyledForm>
  );
};
