import React from "react";
import { IMovie } from "../../types";
import {
  Poster,
  StyledLink,
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
    <StyledLink to={`/movie/${movie.imdbID}`}>
      <Poster src={movie.poster} alt={`poster ${movie.title}`}></Poster>
      <Title>{movie.title}</Title>
      <TextContainer>
        <Type>{movie.type}</Type>
        <Year>{movie.year}</Year>
      </TextContainer>
    </StyledLink>
  );
};
