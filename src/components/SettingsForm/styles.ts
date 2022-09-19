import styled, { css } from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { H2, S3 } from "../../ui/typography";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  height: 100%;
  ${MEDIA.MD} {
    width: 688px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 400px;
  height: 200px;
  padding: 50px;
  background-color: ${Color.Dark};
  ${(props: { isDarkTheme: boolean }) =>
    !props.isDarkTheme &&
    css`
      background-color: ${Color.Light};
    `}
  border-radius: 10px;
  ${MEDIA.SM} {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 275px;
    height: 100%;
    padding-top: 50px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;
  max-width: 400px;
  height: 100%;
  padding: 40px 20px 0 100px;
  ${MEDIA.SM} {
    justify-content: center;
    align-items: center;
    height: 400px;
    padding: 60px 20px 40px 30px;
    margin-bottom: 30px;
  }
`;

const StyledTitle = styled.h2`
  padding-top: 20px;
  padding-left: 20px;
  ${H2}
  color:${Color.Light};
  ${(props: { isDarkTheme: boolean }) =>
    !props.isDarkTheme &&
    css`
      color: ${Color.Graphite};
    `}
  ${MEDIA.SM} {
    padding-top: 40px;
  }
`;

const StyledText = styled.p`
  ${S3}
  color: ${Color.White};
`;

export { StyledWrapper, StyledContainer, StyledTitle, InfoContainer, StyledText };
