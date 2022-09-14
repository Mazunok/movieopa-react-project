import { Navigate } from "react-router-dom";
import { ROUTE } from "router/routes";
import { logoutUser } from "store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";

export const LogOutPage = () => {
  const dispatch = useAppDispatch();
  dispatch(logoutUser());
  return <Navigate to={ROUTE.HOME} />;
};


