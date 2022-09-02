import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { S2, S3 } from "../../ui/typography";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 264px;
  ${MEDIA.MD} {
    width: 100px;
  }
  ${MEDIA.SM}{
    justify-content: flex-end;
  }
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  background: ${Color.primary};
  border-radius: 10px;
  position: relative;
  display: block;
  ${MEDIA.MD} {
    display: none;
  }
`;

const AvatarName = styled.p`
  ${S2}
  font-size: 20;
  color: ${Color.white};
  position: absolute;
  left: 13px;
  top: 16px;
  display: block;
  ${MEDIA.MD} {
    display: none;
  }
`;

const ProfileName = styled.p`
  display: block;
  ${S3};
  color: ${Color.white};
  ${MEDIA.MD} {
    display: none;
  }
`;

const ArrowBtn = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  ${MEDIA.MD} {
    display: none;
  }
`;

const BurgerContainer = styled.button`
  display: none;
  width: 56px;
  height: 56px;
  background: ${Color.primary};
  border-radius: 10px;
  ${MEDIA.MD} {
    display: block;
  }
`;

const BurgerButton = styled.div`
  position: relative;
  display: none;
  width: 24px;
  height: 24px;
  left: 15px;
  border-top: 2px solid ${Color.white};
  border-bottom: 2px solid ${Color.white};
  ::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 0px;
    width: 100%;
    border-top: 2px solid ${Color.white};
  }
  ${MEDIA.MD} {
    display: block;
  }
  ${MEDIA.SM} {
  }
`;

export {
  StyledContainer,
  Avatar,
  AvatarName,
  ProfileName,
  ArrowBtn,
  BurgerButton,
  BurgerContainer,
};
