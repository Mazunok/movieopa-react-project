import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDetailsMovie } from "../../types/index";
import { movieAPI } from "../../services/index";
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
import { useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../store/features/favoritesSlice/favoritesSlice";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IDetailsMovie>();

  useEffect(() => {
    movieAPI.getDetails(id as string).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <PosterContainer>
        <Poster src={movie && movie.Poster}></Poster>
        <LikeButton onClick={() => dispatch(addFavorite(movie))}>❤️</LikeButton>
        <LikeButton onClick={() => dispatch(removeFavorite(movie))}>
          💔
        </LikeButton>
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
