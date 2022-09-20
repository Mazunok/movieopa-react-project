import styled from "styled-components";
import { MEDIA } from "ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  ${MEDIA.MD} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;
    gap: 20px;
  }
`;

export { Wrapper, Container };
