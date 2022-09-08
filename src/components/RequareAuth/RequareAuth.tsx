import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export const RequareAuth = () => {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.SIGN_UP} />;
};
