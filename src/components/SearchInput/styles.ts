import styled, { css } from "styled-components";
import { H3 } from "ui";
import { Color } from "../../ui/colors";

const StyledInput = styled.input`
  flex-grow: 1;
  height: 56px;
  margin: 0;
  border: none;
  border-radius: 10px;
  ${H3}
  background: ${Color.Graphite};
  ${(props: { isDarkTheme: boolean }) =>
    !props.isDarkTheme &&
    css`
      background-color: ${Color.Light};
    `}
  ::placeholder {
    ${H3}
    color: ${Color.Black};
    padding-left: 10px;
  }
`;

const StyledButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: ${Color.Primary};
  border-radius: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-grow: 1;
`;

export { StyledInput, StyledButton, InputContainer };
