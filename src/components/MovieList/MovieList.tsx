import React from "react";
import { IMovie } from "../../types";
import { MovieItem } from "../MovieItem/MovieItem";
import { Container } from "./styles";

interface IProps {
  movies: IMovie[];
}

export const MovieList = ({ movies }: IProps) => {
  return (
    <Container>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} />;
      })}
    </Container>
  );
};
