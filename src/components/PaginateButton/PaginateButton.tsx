import { StyledButton } from "./styles";

interface IProps {
  onClick: () => void;
  type: string;
  children: string;
}

export const PaginateButton = ({ onClick, children }: IProps) => {
  return (
    <StyledButton onClick={onClick} type="button">
      {children}
    </StyledButton>
  );
};
