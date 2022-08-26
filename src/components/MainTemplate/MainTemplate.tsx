import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <>
      <Wrapper>
        <Nav />
        <Outlet />
      </Wrapper>
    </>
  );
};
