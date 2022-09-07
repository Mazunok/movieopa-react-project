import styled from "styled-components";
import { Color } from "../../ui/colors";
import { H1, S3 } from "../../ui/typography";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 100px;
  padding-top: 30px;
  gap: 40px;
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
  border-radius: 10px;
  color: ${Color.Graphite};
  cursor: pointer;
`;

const InfoContainer = styled.div`
  width: 878px;
  height: 492px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
`;

const Subtitle = styled.h2`
  color: ${Color.Light};
  ${S3};
  font-weight: 500;
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
  color: ${Color.Light};
  ${S3}
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
