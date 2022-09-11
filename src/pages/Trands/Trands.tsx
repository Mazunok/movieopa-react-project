import React, { useEffect, useState } from "react";
import { MovieList } from "../../components/index";
import { MovieRequestParams } from "../../types/index";
import { IMovie } from "../../types";
import { transformMovieData, movieAPI } from "../../services/index";

export const Trands = () => {
  const [trands, setTrands] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestParams, setRequestParams] = useState<MovieRequestParams>({});

  useEffect(() => {
    movieAPI
      .getTrands(requestParams)
      .then((data) => {
        const transwormedData = transformMovieData(data.Search);
        setTrands(transwormedData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  }, [requestParams]);

  return (
    <MovieList
      movies={trands}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};
