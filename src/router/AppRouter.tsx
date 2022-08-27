import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages/Home";
import {SignIn} from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";
import { routes } from "./routes";
import { Trands } from "../pages/Trands";
import { Favorites } from "../pages/Favorites";
import { Settings } from "../pages/Settings";
import { Search } from "../pages/Search";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={routes.TRANDS} element={<Trands />} />
        <Route path={routes.FAVORITES} element={<Favorites />} />
        <Route path={routes.SETTINGS} element={<Settings />} />
        <Route path={routes.SEARCH} element={<Search />} />
        <Route path={routes.NOT_FOUND} element={<NotFound />} />
      </Route>
      <Route path={routes.SIGN_IN} element={<SignIn />} />
      <Route path={routes.SIGN_UP} element={<SignUp />} />
    </Routes>
  );
};
