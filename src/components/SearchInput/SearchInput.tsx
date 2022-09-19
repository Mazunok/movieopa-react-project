import { useEffect } from "react";
import { InputContainer, StyledButton, StyledInput } from "./styles";
import { useInput } from "../../hooks/useInput";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { addSearchValue } from "../../store/features/searchSlice/searchSlice";
import { RiSearchLine } from "react-icons/ri";
import { getUser } from "store";

export const SearchInput = () => {
  const search = useInput("");
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce(search.value, 300);
  const navigate = useNavigate();
  const { isDarkTheme } = useAppSelector(getUser);

  const handleSearch = () => {
    navigate("/search/1");
  };

  useEffect(() => {
    dispatch(addSearchValue(debounceValue));
  }, [debounceValue, dispatch]);

  return (
    <InputContainer>
      <StyledInput
        isDarkTheme={isDarkTheme}
        className={isDarkTheme ? "dark" : "light"}
        type="text"
        placeholder="Search"
        {...search}
      />
      <StyledButton type="button" onClick={handleSearch}>
        <RiSearchLine />
      </StyledButton>
    </InputContainer>
  );
};
