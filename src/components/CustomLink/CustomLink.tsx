import { ReactNode } from "react";
import { ROUTE } from "../../router/routes";
import { StyledLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomLink = ({ children, to }: IProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
