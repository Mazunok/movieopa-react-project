import styled, { css } from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
  background-color: ${Color.Black};
  color: ${Color.White};

  ${(props: { isDarkTheme: boolean }) =>
    !props.isDarkTheme &&
    css`
      background-color: ${Color.White};
      color: ${Color.Black};
    `}
`;

export { Wrapper };
