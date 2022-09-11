import { ChangeEvent, useEffect } from "react";
import { movieAPI } from "../../services/index";
import { StyledInput } from "./styled";
import { useInput } from "../../hooks/useInput";
import { useAppDispatch } from "../../store/hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { fetchSearch } from "../../store/features/searchSlice/searchSlice";

// interface IProps {
//   placeholder: string;
//   value?: string;
//   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
//   type: string;
// }

export const SearchInput = () => {
  const search = useInput("");
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce(search.value, 300);

  useEffect(() => {
    dispatch(fetchSearch({ s: debounceValue }));
  }, [debounceValue, dispatch]);

  return <StyledInput type="text" placeholder="Search" {...search} />;
};
