import { motion } from "framer-motion";
import styled from "styled-components";
import { MEDIA } from "ui";
import { Color } from "../../ui/colors";
import { H1, S3 } from "../../ui/typography";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  max-width: 1150px;
  height: 100%;
  padding-left: 50px;
  padding-top: 30px;
  ${MEDIA.SM} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 20px, auto;
  }
`;

const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
`;

const Poster = styled.img`
  width: 250px;
  height: 356px;
  border-radius: 20px;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const LikeButton = styled(motion.button)`
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
  max-width: 878px;
  height: 492px;
  padding: 30px;
  ${MEDIA.SM} {
    height: 100%;
  }
`;

const Subtitle = styled.h2`
  ${S3};
  font-family: "Exo 2";
  font-weight: 500;
  color: ${Color.Light};
`;

const Title = styled.h1`
  ${H1}
  font-family: "Exo 2";
  color: ${Color.Light};
`;

const Descriprion = styled.p`
  ${S3}
  font-family: "Exo 2";
  font-weight: 500;
  color: ${Color.Light};
`;

const StyledText = styled.p`
  ${S3}
  font-family: "Exo 2";
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
  SpinnerContainer,
};
