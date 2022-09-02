import React from "react";
import { IMovie } from "../../types";
import { CardContainer, Poster, Title, Type, Year } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieItem = ({ movie }: IProps) => {
  return (
    <CardContainer>
      <Poster src={movie.poster} alt={`poster ${movie.title}`}></Poster>
      <Title>{movie.title}</Title>;<Type>{movie.type}</Type>;
      <Year>{movie.year}</Year>;
    </CardContainer>
  );
};
