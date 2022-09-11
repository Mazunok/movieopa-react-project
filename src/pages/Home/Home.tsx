import { useEffect } from "react";
import { MovieList } from "../../components/index";
import { fetchMovies } from "../../store/features/moviesSlice/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { transformMovieData } from "../../utils/formatData";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(
    (state) => state.persistedReducer.movies
  );

  useEffect(() => {
    dispatch(fetchMovies({}));
  }, [dispatch]);

  return (
    <MovieList
      movies={transformMovieData(results.Search)}
      isLoading={isLoading}
      errorMessage={error}
    />
  );
};
