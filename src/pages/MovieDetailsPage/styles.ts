import styled from "styled-components";
import { Color } from "../../ui/colors";
import { H1, S3 } from "../../ui/typography";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding-left: 100px;
  padding-top: 30px;
`;

const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Poster = styled.img`
  width: 250px;
  height: 356px;
  border-radius: 20px;
`;

const LikeButton = styled.button`
  width: 250px;
  height: 56px;
  background-color: ${Color.Graphite};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 878px;
  height: 492px;
`;

const Subtitle = styled.h2`
  ${S3};
  font-weight: 500;
  color: ${Color.Light};
`;

const Title = styled.h1`
  ${H1}
  color: ${Color.White};
`;

const Descriprion = styled.p`
  ${S3}
  font-weight: 500;
  color: ${Color.White};
`;

const StyledText = styled.p`
  ${S3}
  color: ${Color.Light};
`;

export {
  StyledWrapper,
  Descriprion,
  StyledText,
  PosterContainer,
  Poster,
  LikeButton,
  InfoContainer,
  Subtitle,
  Title,
};