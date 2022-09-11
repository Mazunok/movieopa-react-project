import { ChangeEvent, useEffect } from "react";
import { movieAPI } from "../../services/index";
import { StyledInput } from "./styled";
import { useInput } from "../../hooks/useInput";

interface IProps {
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export const SearchInput = ({ placeholder, value, onChange, type }: IProps) => {
  const search = useInput("");
  useEffect(() => {
    movieAPI.getSearch(search.value); 
  },[]);

  return <StyledInput type={type} placeholder={placeholder} {...search} />;
};
