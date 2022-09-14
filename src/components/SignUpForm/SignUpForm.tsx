import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router/routes";
import { Spinner } from "../Spinner/Spinner";
import { Text, Input, Title, Button, StyledForm, Span } from "../SignInForm/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { registerUser } from "../../store/features/userSlice/userSlice";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { CustomLink } from "../CustomLink";

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

  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.persistedReducer.user);
  const [isOpen, toggleModal] = useState<boolean>(false);

  const handleModal = () => {
    toggleModal((isOpen) => !isOpen);
  };

  const onSubmit: SubmitHandler<SignUpFormValues> = ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    dispatch(registerUser({ email, password, name, handleModal }));

    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign Up</Title>
      <label>
        <Text>Name:</Text>
        <Input
          type="name"
          placeholder="Your name"
          {...register("name", { required: "Name is required" })}
        />
      </label>
      {errors.name && <Span>{errors.name.message}</Span>}
      <label>
        <Text>Email:</Text>
        <Input
          type="email"
          placeholder="Your email"
          {...register("email", { required: "Email is required" })}
        />
      </label>
      {errors.email && <Span>{errors.email.message}</Span>}
      <label>
        <Text>Password:</Text>
        <Input
          type="password"
          placeholder="Your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
        />
      </label>
      {errors.password && <Span>{errors.password.message}</Span>}
      <label>
        <Text>Confirm password:</Text>
        <Input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Confirm your password",
          })}
        />
      </label>
      {errors.confirmPassword && <Span>{errors.confirmPassword.message}</Span>}
      <Button type="submit">{isLoading ? <Spinner /> : "Sign Up"}</Button>
      {error && <Span>{error}</Span>}
      <Text>
        Already have an acount <Link to={`${ROUTE.SIGN_IN}`}>Sign In</Link>
      </Text>
      <Modal isOpen={isOpen} handleModal={handleModal} />
    </StyledForm>
  );
};
