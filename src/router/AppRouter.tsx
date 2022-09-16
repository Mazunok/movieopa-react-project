import { ChangePasswordPage } from "pages/ChangePasswordPage/ChangePasswordPage";
import { LogOutPage } from "pages/LogOutPage/LogOutPage";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { SearchPage } from "pages/SearchPage/SearchPage";
import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequareAuth } from "../components";
import { Home, SignIn, SignUp, NotFound, Trands, Favorites, Settings } from "../pages/index";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTE.MOVIE_DETAILS} element={<MovieDetailsPage />} />
        <Route path={ROUTE.TRANDS} element={<Trands />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<Favorites />} />
          <Route path={ROUTE.SETTINGS} element={<Settings />} />
        </Route>
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Route>
      <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTE.LOG_OUT} element={<LogOutPage />} />
      <Route path={ROUTE.CHANGE_PASSWORD} element={<ChangePasswordPage />} />
    </Routes>
  );
};
