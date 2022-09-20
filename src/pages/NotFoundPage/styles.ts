import styled from "styled-components";
import { Color, H1 } from "ui";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Message = styled.p`
  ${H1};
  color: ${Color.White};
`;

export const Page = styled.span`
  color: ${Color.Primary};
`;
