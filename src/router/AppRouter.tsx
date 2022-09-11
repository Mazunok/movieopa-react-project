import { Route, Routes } from "react-router-dom";
import {
  Home,
  SignIn,
  SignUp,
  NotFound,
  Trands,
  Favorites,
  Settings,
  Search,
  MovieDetails,
  UserInfo,
} from "../pages/index";
import { ROUTES } from "./routes";
import { MainTemplate, RequareAuth } from "../components/index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.MOVIE_DETAILS} element={<MovieDetails />} />
        <Route path={ROUTES.TRANDS} element={<Trands />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        </Route>
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Route>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.USER_INFO} element={<UserInfo />} />
    </Routes>
  );
};
