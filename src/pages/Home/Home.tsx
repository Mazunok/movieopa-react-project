import { useEffect } from "react";
import { MovieList } from "../../components/index";
import { fetchMovies } from "../../store/features/moviesSlice/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { transformMovieData } from "../../services/index";
import { HomeContainer } from "./styles";
import { ShowMoreButton } from "../../components/ShowMoreButton/ShowMoreButton";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(
    (state) => state.persistedReducer.movies
  );

  useEffect(() => {
    dispatch(fetchMovies({}));
  }, [dispatch]);

  return (
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
  );
};
