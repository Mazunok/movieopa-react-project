import React from "react";
import { IMovie } from "../../types";
import {
  CardContainer,
  Poster,
  TextContainer,
  Title,
  Type,
  Year,
} from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieItem = ({ movie }: IProps) => {
  return (
    <CardContainer>
      <Poster src={movie.Poster} alt={`poster ${movie.Title}`}></Poster>
      <Title>{movie.Title}</Title>
      <TextContainer>
        <Type>{movie.Type}</Type>
        <Year>{movie.Year}</Year>
      </TextContainer>
    </CardContainer>
  );
};
