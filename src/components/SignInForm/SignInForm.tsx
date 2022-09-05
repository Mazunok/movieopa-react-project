import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { getFirebaseeMessageError } from "../../utils/firebase-errors";
import { Spinner } from "../Spinner/Spinner";
import { StyledForm, Text, Input, Title, Button, Span } from "./styles";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const onSubmit: SubmitHandler<SignInFormValues> = ({ email, password }) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      <Button type="submit">{isLoading ? <Spinner /> : "Sign In"}</Button>
      {errorMessage && <Span>{errorMessage}</Span>}
      <Text>
        Don't have an account <Link to={`/${ROUTES.SIGN_UP}`}>Sign Up</Link>
      </Text>
    </StyledForm>
  );
};
function setErrorMessage(arg0: any) {
  throw new Error("Function not implemented.");
}
