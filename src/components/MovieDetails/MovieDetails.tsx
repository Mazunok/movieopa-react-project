import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  SpinnerContainer,
} from "./styles";
import { addFavorite, removeFavorite } from "../../store/features/favoritesSlice/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchDetails } from "../../store/features/movieDetailsSlice/movieDetailsSlice";
import { getmovieDetails } from "store";
import { Spinner } from "components/Spinner";

export const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { results, isLoading } = useAppSelector(getmovieDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetails(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  return (
    <StyledWrapper>
      <PosterContainer>
        <Poster src={results.Poster}></Poster>
        <LikeButton whileTap={{ scale: 0.9 }} onClick={() => dispatch(addFavorite(results))}>
          ❤️
        </LikeButton>
        <LikeButton whileTap={{ scale: 0.9 }} onClick={() => dispatch(removeFavorite(results))}>
          💔
        </LikeButton>
      </PosterContainer>
      <InfoContainer>
        <Subtitle>{results.Genre}</Subtitle>
        <Title>{results.Title}</Title>
        <Descriprion>{results.Plot}</Descriprion>
        <StyledText>Year : {results.Year}</StyledText>
        <StyledText>Released : {results.Released}</StyledText>
        <StyledText>BoxOffice : {results.BoxOffice}</StyledText>
        <StyledText>Country : {results.Country}</StyledText>
        <StyledText>Production : {results.Production}</StyledText>
        <StyledText>Actors : {results.Actors}</StyledText>
        <StyledText>Director : {results.Director}</StyledText>
        <StyledText>Writers : {results.Writer}</StyledText>
      </InfoContainer>
    </StyledWrapper>
  );
};
