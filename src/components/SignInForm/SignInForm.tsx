import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../router/routes";
import { signInUser } from "../../store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CustomLink } from "../CustomLink";
import { Spinner } from "../Spinner/Spinner";
import { StyledForm, Text, Input, Title, Button, Span } from "./styles";

export type SignInFormValues = {
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.persistedReducer.user);

  const onSubmit: SubmitHandler<SignInFormValues> = ({ email, password }) => {
    dispatch(signInUser({ email, password }));
    reset();
    navigate(`${ROUTE.SETTINGS}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign In</Title>
      <CustomLink to={ROUTE.CHANGE_PASSWORD}>Forgot Password</CustomLink>
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
      <Button type="submit">{isLoading ? <Spinner /> : "Sign In"}</Button>
      {error && <Span>{error}</Span>}
      <Text>
        Don't have an account <Link to={`${ROUTE.SIGN_UP}`}>Sign Up</Link>
      </Text>
    </StyledForm>
  );
};
