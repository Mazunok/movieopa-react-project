import { css } from "styled-components";

const level1 = css`
  padding: 64px;
  @media (max-width: 768px) {
    padding: 56px;
  }
  @media (max-width: 568px) {
    padding: 48px;
  }
`;

const level2 = css`
  padding: 56px;
  @media (max-width: 768px) {
    padding: 48px;
  }
  @media (max-width: 568px) {
    padding: 40px;
  }
`;

const level3 = css`
  padding: 48px;
  @media (max-width: 568px) {
    padding: 40px;
  }
`;

const level4 = css`
  padding: 40px;
  @media (max-width: 568px) {
    padding: 32px;
  }
`;

const level5 = css`
  padding: 32px;
  @media (max-width: 568px) {
    padding: 24px;
  }
`;

const level6 = css`
  padding: 24px;
  @media (max-width: 568px) {
    padding: 20px;
  }
`;

const level7 = css`
  padding: 20px;
  @media (max-width: 568px) {
    padding: 16px;
  }
`;

const level8 = css`
  padding: 16px;
`;

const level9 = css`
  padding: 8px;
`;

export {
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
};
