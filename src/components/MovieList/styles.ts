import styled from "styled-components";
import { MEDIA } from "ui";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 22px;
  max-height: 100vh;
  margin: 30px 40px 20px 60px;
  ${MEDIA.SM} {
    height: 100vh;
    padding-top: 40px;
    margin: 0 auto;
  }
`;

export { Container };
