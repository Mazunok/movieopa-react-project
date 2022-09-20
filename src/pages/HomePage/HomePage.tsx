import { useEffect } from "react";
import { MovieList, Spinner } from "../../components/index";
import { cleanStore, fetchMovies } from "../../store/features/moviesSlice/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { transformMovieData } from "../../services/index";
import { HomeContainer, SpinnerContainer } from "./styles";
import { getMovies } from "store";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(cleanStore());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      <HomeContainer>
        <MovieList
          movies={transformMovieData(results.Search)}
          isLoading={isLoading}
          errorMessage={error}
        />
      </HomeContainer>
    </>
  );
};
