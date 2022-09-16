import { useEffect } from "react";
import { StyledInput } from "./styled";
import { useInput } from "../../hooks/useInput";
import { useAppDispatch } from "../../store/hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { addSearchValue } from "../../store/features/searchSlice/searchSlice";

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
    <>
      <StyledInput type="text" placeholder="Search" {...search} />
      <button
        type="button"
        onClick={handleSearch}
        style={{ width: "20px", height: "20px", background: "white" }}
      />
      ;
    </>
  );
};
