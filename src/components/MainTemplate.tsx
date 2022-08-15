import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav/Nav";

export const MainTemplate = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};
