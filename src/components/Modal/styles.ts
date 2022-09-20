import styled from "styled-components";
import { Color } from "../../ui/colors";
import { H3, S3 } from "../../ui/typography";

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 600px;
  height: 80%;
  background-color: ${Color.Dark};
  border-radius: 10px;
`;

const ModalTitle = styled.h5`
  ${H3}
  color: ${Color.White};
`;

const ModalText = styled.p`
  ${S3}
  color: ${Color.White};
`;

export { ModalWrapper, ModalContainer, ModalTitle, ModalText };
