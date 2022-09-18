import { MovieList, Spinner } from "components";
import { PaginateButton } from "components/PaginateButton/PaginateButton";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { transformMovieData } from "services";
import { getSearch, useAppDispatch, useAppSelector } from "store";
import { fetchSearch } from "store/features/searchSlice/searchSlice";
import { countPages } from "utils/countPages";
import { SearchContainer, SpinnerContainer } from "./styles";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { page = "1" } = useParams();
  const { searchResponse, searchValue, isLoading, error } = useAppSelector(getSearch);

  const handleNext = () => {
    if (
      searchValue &&
      !!searchResponse.totalResults &&
      countPages(searchResponse.totalResults) > +page
    ) {
      navigate(`/search/${+page + 1}`);
    }

    dispatch(fetchSearch({ searchValue, page: (+page + 1).toString() }));
  };

  const handlePrevious = () => {
    if (searchValue && +page > 1) {
      navigate(`/search/${+page - 1}`);
    }

    dispatch(fetchSearch({ searchValue, page: (+page - 1).toString() }));
  };

  useEffect(() => {
    if (searchValue) {
      dispatch(
        fetchSearch({
          searchValue,
          page,
        }),
      );
    }
  }, [dispatch, searchValue, page]);

  return (
    <>
      {isLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      <SearchContainer>
        <MovieList
          movies={transformMovieData(searchResponse.Search)}
          isLoading={isLoading}
          errorMessage={error}
        />
        <div>
          <PaginateButton onClick={handlePrevious} type="button" />
          <PaginateButton onClick={handleNext} type="button" />
        </div>
      </SearchContainer>
    </>
  );
};
