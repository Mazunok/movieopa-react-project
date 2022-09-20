import styled, { css } from "styled-components";
import { Color } from "ui";

const Toggle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${Color.White};

  ${(props: { isDarkTheme: boolean }) =>
    !props.isDarkTheme &&
    css`
      background-color: ${Color.Black};
    `}
`;

export { Toggle };
