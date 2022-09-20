import { Outlet } from "react-router-dom";
import { ThemeContextWrapper } from "../ThemeContextWrapper";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <ThemeContextWrapper>
      <Wrapper>
        <Header />
        <Container>
          <Nav />
          <Outlet />
        </Container>
      </Wrapper>
    </ThemeContextWrapper>
  );
};
