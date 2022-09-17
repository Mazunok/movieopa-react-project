import { useToggle } from "hooks";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
  const [isNavOpen, setIsNavOpen] = useToggle(false);
  return (
    <Wrapper>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Container>
        <Nav isNavOpen={isNavOpen} />
        <Outlet />
      </Container>
    </Wrapper>
  );
};
