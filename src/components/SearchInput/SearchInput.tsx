import { ChangeEvent, useEffect } from "react";
import { movieAPI } from "../../services/index";
import { StyledInput } from "./styled";
import { useInput } from "../../hooks/useInput";
import { useAppDispatch } from "../../store/hooks";

interface IProps {
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export const SearchInput = ({ placeholder, value, onChange, type }: IProps) => {
  const search = useInput("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    movieAPI.getSearch(search.value);
  }, []);

  return <StyledInput type={type} placeholder={placeholder} {...search} />;
};
