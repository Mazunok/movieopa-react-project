import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  onClick: () => void;
}

export const ShowMoreButton = ({ onClick }: IProps) => {
  return <StyledButton onClick={onClick}>Show More</StyledButton>;
};
