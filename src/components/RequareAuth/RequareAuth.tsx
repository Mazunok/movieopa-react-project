import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "store";
import { useAppSelector } from "store/hooks";
import { ROUTE } from "../../router/routes";

export const RequareAuth = () => {
  const user = useAppSelector(getUser);
  return user.result ? <Outlet /> : <Navigate to={ROUTE.SIGN_UP} />;
};
