import styled from "styled-components";
import { MEDIA } from "ui";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
  height: 100%;
  margin: 30px 100px;
  ${MEDIA.SM} {
    padding-top: 40px;
    margin: 0 auto;
  }
`;

export { Container };
