import React from "react";
import { StyledInput } from "./styled";

interface IProps {
  placeholder: string;
  value: string;
}

export const Input = ({ placeholder, value }: IProps) => {
  return <StyledInput type="text" placeholder={placeholder} />;
};
