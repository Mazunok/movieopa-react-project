import { NoImage } from "assets";
import React from "react";
import { getUser, useAppSelector } from "store";
import { IMovie } from "../../types";
import { Poster, StyledLink, TextContainer, Title, Type, Year, GlobalStyle } from "./styles";

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
          alt={`poster: ${movie.title}`}
        ></Poster>
        <Title>{movie.title}</Title>
        <TextContainer>
          <Type isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
            {movie.type}
          </Type>
          <Year isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
            {movie.year}
          </Year>
        </TextContainer>
      </StyledLink>
    </React.Fragment>
  );
};
