import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";

const StyledInput = styled.input`
  flex-grow: 1;
  height: 56px;
  margin: 0;
  background: ${Color.Graphite};
  border: none;
  border-radius: 10px;
  ${MEDIA.SM} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    width: 100%;
  }
`;

export { StyledInput };
