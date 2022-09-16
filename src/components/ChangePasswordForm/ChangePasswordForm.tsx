import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUser } from "store";
import { ROUTE } from "../../router/routes";
import { forgotPassword } from "../../store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Spinner } from "../Spinner/Spinner";
import { StyledForm, Text, Input, Title, Button, Span } from "./styles";

type ChangePasswordValues = {
  email: string;
};

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(getUser);

  const onSubmit: SubmitHandler<ChangePasswordValues> = ({ email }) => {
    dispatch(
      forgotPassword({
        email,
        password: "",
      }),
    );
    reset();
    navigate(`${ROUTE.SETTINGS}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Change Password</Title>
      <label>
        <Text>Email:</Text>
        <Input
          type="email"
          placeholder="Your email"
          {...register("email", { required: "Email is required" })}
        />
      </label>
      {errors.email && <Span>{errors.email.message}</Span>}

      <Button type="submit">{isLoading ? <Spinner /> : "Change Password"}</Button>
      {error && <Span>{error}</Span>}
    </StyledForm>
  );
};
