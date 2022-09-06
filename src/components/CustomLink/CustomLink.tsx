import { ReactNode } from "react";
import { ROUTES } from "../../router/routes";
import { StyledLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTES;
}

export const CustomLink = ({ children, to }: IProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
