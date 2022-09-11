import styled from "styled-components";
import { Color } from "../../ui/colors";
import { S3 } from "../../ui/typography";

const StyledButton = styled.button`
  width: 161px;
  height: 40px;
  margin: 20px;
  ${S3}
  font-family: 'Exo 2';
  font-weight: 500;
  background: ${Color.Graphite};
  border-radius: 40px;
  color: ${Color.White};
`;

export { StyledButton };
