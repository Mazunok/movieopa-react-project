import { StyledButton } from "./styles";

interface IProps {
  onClick: () => void;
  type: string;
}

export const PaginateButton = ({ onClick }: IProps) => {
  return <StyledButton onClick={onClick} type="button"></StyledButton>;
};
