import styled from "styled-components";
import { Color } from "ui";

const StyledButton = styled.button`
  position: relative;
  left: 15px;
  width: 56px;
  height: 56px;
  background-color: ${Color.Primary};
  border-top: 2px solid ${Color.White};
  border-bottom: 2px solid ${Color.White};
  border-radius: 10px;
  ::before {
    content: "";
    position: absolute;
    top: 25px;
    left: 0px;
    width: 100%;
    border-top: 2px solid ${Color.White};
  }
`;

export { StyledButton};
