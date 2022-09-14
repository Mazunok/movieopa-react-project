import { useAuth } from "hooks";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks";
import { ROUTES } from "../../router/routes";

export const RequareAuth = () => {
  const user = useAppSelector((state) => state.persistedReducer.user.result);
  return user ? <Outlet /> : <Navigate to={ROUTES.SIGN_UP} />;
};
