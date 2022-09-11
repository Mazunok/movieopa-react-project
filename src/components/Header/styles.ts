import styled from "styled-components";
import { MEDIA } from "../../ui/media";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding: 40px 20px 0 100px;
  ${MEDIA.MD} {
    justify-content: space-around;
    align-items: center;
    padding-left: 30px;
  }
  ${MEDIA.SM} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
    align-items: center;
    gap: 20px;
    max-width: 275px;
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
