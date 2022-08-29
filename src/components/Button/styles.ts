import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledButton = styled.button`
  width: 161px;
  height: 40px;
  background: ${Color.graphite};
  border-radius: 40px;
  font-family: "Exo 2";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.white};
  cursor: pointer;
`;

export { StyledButton };
