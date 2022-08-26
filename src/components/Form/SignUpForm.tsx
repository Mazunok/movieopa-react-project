import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="name" {...register("name")}></input>
      </label>
      <label>
        Email:
        <input type="email" {...register("email")}></input>
      </label>
      <label>
        Password:
        <input type="password" {...register("password")}></input>
      </label>
      <label>
        Confirm password:
        <input type="password" {...register("confirmPassword")}></input>
      </label>
      <p>
        Already have an acount
        <Link to={`/${routes.SING_IN}`}>Sign In</Link>
      </p>
      <button type="submit">SingUp</button>
    </form>
  );
};
