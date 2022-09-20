import styled from "styled-components";
import { MEDIA } from "../../ui/media";

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding: 40px 40px 0 40px;
  ${MEDIA.MD} {
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
  }
  ${MEDIA.SM} {
    display: flex;
    flex-direction: column;
    max-width: 275px;
    margin: 0 auto;
  }
`;

const LogoWrapper = styled.div`
  width: 160px;
  padding-top: 10px;
`;
export { StyledHeader, LogoWrapper };
