import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDetailsMovie } from "../../types/index";
import { movieAPI } from "../../services/movieApi/movieApi";
import {
  Descriprion,
  InfoContainer,
  LikeButton,
  Poster,
  PosterContainer,
  StyledWrapper,
  Subtitle,
  Title,
  StyledText,
} from "./styles";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IDetailsMovie>();

  useEffect(() => {
    movieAPI.getDetails(id as string).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  return (
    <StyledWrapper>
      <PosterContainer>
        <Poster src={movie && movie.Poster}></Poster>
        <LikeButton>❤️</LikeButton>
      </PosterContainer>
      <InfoContainer>
        <Subtitle>{movie && movie.Genre}</Subtitle>
        <Title>{movie && movie.Title}</Title>
        <Descriprion>{movie && movie.Plot}</Descriprion>
        <StyledText>Year: {movie && movie.Year}</StyledText>
        <StyledText>Released:{movie && movie.Released}</StyledText>
        <StyledText>BoxOffice:{movie && movie.BoxOffice}</StyledText>
        <StyledText>Country:{movie && movie.Country}</StyledText>
        <StyledText>Production:{movie && movie.Production}</StyledText>
        <StyledText>Actors:{movie && movie.Actors}</StyledText>
        <StyledText>Director:{movie && movie.Director}</StyledText>
        <StyledText>Writers:{movie && movie.Writer}</StyledText>
      </InfoContainer>
    </StyledWrapper>
  );
};
