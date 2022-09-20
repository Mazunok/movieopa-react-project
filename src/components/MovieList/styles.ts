import styled from "styled-components";
import { MEDIA } from "ui";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 22px;
  min-height: 906px;
  margin: 30px 40px 20px 60px;
  ${MEDIA.SM} {
    height: 100%;
    padding-top: 40px;
    margin: 0 auto;
  }
`;

export { Container };
