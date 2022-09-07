import React from "react";
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
  return (
    <StyledWrapper>
      <PosterContainer>
        <Poster></Poster>
        <LikeButton>❤️</LikeButton>
      </PosterContainer>
      <InfoContainer>
        <Subtitle>subtitle</Subtitle>
        <Title>Title</Title>
        <Descriprion>Description</Descriprion>
        <StyledText>Year:</StyledText>
        <StyledText>Released:</StyledText>
        <StyledText>BoxOffice:</StyledText>
        <StyledText>Country:</StyledText>
        <StyledText>Production:</StyledText>
        <StyledText>Actors:</StyledText>
        <StyledText>Director:</StyledText>
        <StyledText>Writers:</StyledText>
      </InfoContainer>
    </StyledWrapper>
  );
};
