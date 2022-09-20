import { NoImage } from "assets";
import React from "react";
import { getUser, useAppSelector } from "store";
import { IMovie } from "../../types";
import {
  Poster,
  StyledLink,
  TextContainer,
  StyledTitle,
  StyledType,
  Year,
  GlobalStyle,
} from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieItem = ({ movie }: IProps) => {
  const { isDarkTheme } = useAppSelector(getUser);

  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledLink to={`/movie/${movie.imdbID}`}>
        <Poster
          src={movie.poster !== "N/A" ? movie.poster : NoImage}
          alt={`poster: ${movie.imdbID}`}
        ></Poster>
        <StyledTitle>{movie.title}</StyledTitle>
        <TextContainer>
          <StyledType isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
            {movie.type}
          </StyledType>
          <Year isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
            {movie.year}
          </Year>
        </TextContainer>
      </StyledLink>
    </React.Fragment>
  );
};
