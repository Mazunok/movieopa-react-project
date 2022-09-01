import React from "react";
import { StyledInput } from "./styled";

interface IProps {
  placeholder: string;
  value: string;
}

export const SearchInput = ({ placeholder, value }: IProps) => {
  return <StyledInput type="text" placeholder={placeholder} />;
};
