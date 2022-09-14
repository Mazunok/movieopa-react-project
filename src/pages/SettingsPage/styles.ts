import styled from "styled-components";
import { MEDIA } from "../../ui/media";

const SettingsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100%;
  padding-left: 100px;
  ${MEDIA.SM} {
    height: 100%;
    padding: 0;
  }
`;

export { SettingsContainer };
