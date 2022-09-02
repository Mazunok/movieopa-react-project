import React from "react";
import { IMovie } from "../../types";
import { MovieItem } from "../MovieItem/MovieItem";
import { Spinner } from "../Spinner";
import { Container } from "../MovieList/styles";

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
  errorMessage: string;
}

export const MovieList = ({ movies, isLoading, errorMessage }: IProps) => {
  if (isLoading) {
    return <Spinner />;
  }
  if (errorMessage) {
    return <h1>Error</h1>;
  }
  return (
    <Container>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} />;
      })}
    </Container>
  );
};
