import { useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import { movieAPI, MovieRequestParams } from "../../services/movieApi/movieApi";
import { IMovie } from "../../types";
import { transformMovieData } from "../../utils/formatData";

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestParams, setRequestParams] = useState<MovieRequestParams>({});

  useEffect(() => {
    movieAPI
      .getAll(requestParams)
      .then((data) => {
        const transwormedData = transformMovieData(data.Search)
        setMovies(transwormedData)
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
