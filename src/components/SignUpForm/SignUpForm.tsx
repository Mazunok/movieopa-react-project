import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { getFirebaseeMessageError } from "../../utils/firebase-errors";
import { Spinner } from "../Spinner/Spinner";
import {
  Text,
  Input,
  Title,
  Button,
  StyledForm,
  Span,
} from "../SignInForm/styles";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const onSubmit: SubmitHandler<SignUpFormValues> = ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    setIsLoading(true);
    if (password !== confirmPassword) {
      setErrorMessage("Password is not the same");
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setErrorMessage(getFirebaseeMessageError(error.code));
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
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
      {errorMessage && <Span>{errorMessage}</Span>}
      <Text>
        Already have an acount <Link to={`/${ROUTES.SIGN_IN}`}>Sign In</Link>
      </Text>
    </StyledForm>
  );
};
