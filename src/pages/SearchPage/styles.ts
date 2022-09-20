import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  justify-self: flex-end;
  padding-top: 20px;
`;

export { SearchContainer, SpinnerContainer, ButtonWrapper };