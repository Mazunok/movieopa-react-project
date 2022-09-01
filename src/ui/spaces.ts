import { css } from "styled-components";
import { MEDIA } from "./media";

const level1 = css`
  padding: 64px;
  ${MEDIA.MD} {
    padding: 56px;
  }
  ${MEDIA.SM} {
    padding: 48px;
  }
`;

const level2 = css`
  padding: 56px;
  ${MEDIA.MD} {
    padding: 48px;
  }
  ${MEDIA.SM} {
    padding: 40px;
  }
`;

const level3 = css`
  padding: 48px;
  ${MEDIA.SM} {
    padding: 40px;
  }
`;

const level4 = css`
  padding: 40px;
  ${MEDIA.SM} {
    padding: 32px;
  }
`;

const level5 = css`
  padding: 32px;
  ${MEDIA.SM} {
    padding: 24px;
  }
`;

const level6 = css`
  padding: 24px;
  ${MEDIA.SM} {
    padding: 20px;
  }
`;

const level7 = css`
  padding: 20px;
  ${MEDIA.SM} {
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
