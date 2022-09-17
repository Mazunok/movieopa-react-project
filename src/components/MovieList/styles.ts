import styled from "styled-components";
import { MEDIA } from "ui";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
  min-height: 906px;
  margin: 30px 100px;
  ${MEDIA.SM} {
    height: 100%;
    padding-top: 40px;
    margin: 0 auto;
  }
`;

export { Container };
