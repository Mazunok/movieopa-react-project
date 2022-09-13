import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { H2, S3 } from "../../ui/typography";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  ${MEDIA.MD} {
    width: 688px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  width: 100%;
  height: 168px;
  background-color: ${Color.Dark};
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
  width: 100%;
  height: 220px;
  padding: 40px 20px 0 0;
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
  ${H2}
  color:${Color.White};
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
