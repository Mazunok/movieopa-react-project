import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages/Home";
import {SignIn} from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";
import { ROUTES } from "./routes";
import { Trands } from "../pages/Trands";
import { Favorites } from "../pages/Favorites";
import { Settings } from "../pages/Settings";
import { Search } from "../pages/Search";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.TRANDS} element={<Trands />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Route>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
    </Routes>
  );
};
