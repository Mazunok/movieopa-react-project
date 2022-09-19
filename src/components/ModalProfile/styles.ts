import styled from "styled-components";
import { Color } from "../../ui/colors";

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
  position: absolute;
  right: 52px;
  top: 120px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 260px;
  height: 200px;
  background-color: ${Color.Graphite};
  border-radius: 10px;
`;

export { ModalWrapper, ModalContainer };
