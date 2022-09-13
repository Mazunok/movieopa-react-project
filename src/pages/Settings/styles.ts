import styled from "styled-components";
import { MEDIA } from "../../ui/media";

const SettingsContainer = styled.div`
max-width: 1186px;
padding-left: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${MEDIA.SM}{
    height: 100%;
    padding: 0;
  }
`;

export { SettingsContainer };
