import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Nav />
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Wrapper>
  );
};
