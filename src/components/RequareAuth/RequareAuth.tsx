import { useAuth } from "hooks";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export const RequareAuth = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.SIGN_UP} />;
};
