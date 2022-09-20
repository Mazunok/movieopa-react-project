import styled from "styled-components";
import { MEDIA } from "../../ui/media";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  padding-top: 30px;
  ${MEDIA.MD} {
    height: 100%;
    padding: 0;
  }
`;

export { SettingsContainer };
