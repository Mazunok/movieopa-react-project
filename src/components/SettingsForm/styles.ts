import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { H2, S3 } from "../../ui/typography";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${MEDIA.MD} {
    width: 688px;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 168px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  background-color: ${Color.Dark};
  border-radius: 10px;
  ${MEDIA.SM} {
    padding-top: 50px;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    width: 275px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
  height: 220px;
  padding: 40px 20px 0 0;
  ${MEDIA.SM} {
    padding: 60px 20px 40px 30px;
    justify-content: center;
    align-items: center;
    height: 400px;
    margin-bottom: 30px;
  }
`;

const StyledTitle = styled.h2`
  ${H2}
  color:${Color.White};
  padding-top: 20px;
  ${MEDIA.SM} {
    padding-top: 40px;
  }
`;

const StyledLabel = styled.label`
  ${S3}
  color: ${Color.White};
`;

export {
  StyledWrapper,
  StyledContainer,
  StyledTitle,
  InfoContainer,
  StyledLabel,
};
