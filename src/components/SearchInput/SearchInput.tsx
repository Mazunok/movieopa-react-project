import { useEffect } from "react";
import { InputContainer, StyledButton, StyledInput } from "./styles";
import { useInput } from "../../hooks/useInput";
import { useAppDispatch } from "../../store/hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { addSearchValue } from "../../store/features/searchSlice/searchSlice";
import { RiSearchLine } from "react-icons/ri";

export const SearchInput = () => {
  const search = useInput("");
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce(search.value, 300);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search/1");
  };

  useEffect(() => {
    dispatch(addSearchValue(debounceValue));
  }, [debounceValue, dispatch]);

  return (
    <InputContainer>
      <StyledInput type="text" placeholder="Search" {...search} />
      <StyledButton type="button" onClick={handleSearch}>
        <RiSearchLine />
      </StyledButton>
    </InputContainer>
  );
};
