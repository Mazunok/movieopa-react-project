import styled from "styled-components";
import { MEDIA } from "../../ui/media";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  gap: 20px;
  padding-left: 100px;
  padding-top: 40px;
  width: 100%;
  ${MEDIA.MD} {
    padding-left: 30px;
    align-items: center;
    justify-content: space-around;
  }
  ${MEDIA.SM} {
    max-width: 275px;
    display: grid;
    place-items: center;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    margin: 0 auto;
  }
`;

const Logo = styled.img`
  display: none;
  width: 156px;
  ${MEDIA.MD} {
    display: block;
  }
  ${MEDIA.SM} {
    padding-left: 30px;
  }
`;
export { StyledHeader, Logo };
