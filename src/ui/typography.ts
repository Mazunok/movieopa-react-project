import { css } from "styled-components";
import { MEDIA } from "./media";

const H1 = css`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  ${MEDIA.MD} {
    font-size: 32px;
    line-height: 48px;
  }
  ${MEDIA.SM} {
    font-size: 28px;
    line-height: 42px;
  }
`;

const H2 = css`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  ${MEDIA.SM} {
    font-size: 20px;
  }
`;

const H3 = css`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  ${MEDIA.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Body = css`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const S1 = css`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const S2 = css`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const S3 = css`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export { H1, H2, H3, Body, S1, S2, S3 };
