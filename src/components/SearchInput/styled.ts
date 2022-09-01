import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";

const StyledInput = styled.input`
  width: 1184px;
  height: 56px;
  background: ${Color.graphite};
  border-radius: 10px;
  margin: 0;
  border: none;
  ${MEDIA.MD} {
    width: 360px;
  }
  ${MEDIA.SM} {
    width: 272px;
  }
`;

export { StyledInput };
