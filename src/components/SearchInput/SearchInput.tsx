import { ChangeEvent } from "react";
import { StyledInput } from "./styled";

interface IProps {
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export const SearchInput = ({ placeholder, value, onChange, type }: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
