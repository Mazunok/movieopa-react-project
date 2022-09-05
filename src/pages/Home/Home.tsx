import { useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import { movieAPI, MovieRequestParams } from "../../services/movieApi/movieApi";
import { IMovie } from "../../types";

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestParams, setRequestParams] = useState<MovieRequestParams>({});

  useEffect(() => {
    movieAPI
      .getAll(requestParams)
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  }, [requestParams]);

  return (
    <MovieList
      movies={movies}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};
