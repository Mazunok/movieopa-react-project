import { ChangePasswordPage } from "pages/ChangePasswordPage/ChangePasswordPage";
import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequareAuth } from "../components";
import { ChangePasswordForm } from "../components/ChangePasswordForm/ChangePasswordForm";
import {
  Home,
  SignIn,
  SignUp,
  NotFound,
  Trands,
  Favorites,
  Settings,
  MovieDetails,
} from "../pages/index";
import { ROUTES } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.MOVIE_DETAILS} element={<MovieDetails />} />
        <Route path={ROUTES.TRANDS} element={<Trands />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTES.FAVORITES} element={<Favorites />} />{" "}
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Route>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.CHANGE_PASSWORD} element={<ChangePasswordPage />} />
    </Routes>
  );
};
