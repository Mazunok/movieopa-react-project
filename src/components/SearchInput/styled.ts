import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";

const StyledInput = styled.input`
  height: 56px;
  background: ${Color.graphite};
  border-radius: 10px;
  margin: 0;
  border: none;
  flex-grow: 1;
  ${MEDIA.SM} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    width: 100%;
  }
  
`;

export { StyledInput };
