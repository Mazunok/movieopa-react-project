import { StyledButton } from "./styles";

interface IProps {
  onClick: () => void;
}

export const BurgerButton = ({ onClick }: IProps) => {
  return <StyledButton onClick={onClick} />;
};
