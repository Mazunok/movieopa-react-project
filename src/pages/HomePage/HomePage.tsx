import { useEffect } from "react";
import { MovieList, Spinner } from "../../components/index";
import { fetchMovies } from "../../store/features/moviesSlice/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { transformMovieData } from "../../services/index";
import { HomeContainer, SpinnerContainer } from "./styles";
import { ShowMoreButton } from "../../components/ShowMoreButton/ShowMoreButton";
import { getMovies } from "store";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies({}));
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
        <ShowMoreButton
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </HomeContainer>
    </>
  );
};
