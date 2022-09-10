import styled from "styled-components";
import { Color } from "../../ui/colors";
import { MEDIA } from "../../ui/media";
import { H2, H3, S2, S3 } from "../../ui/typography";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 260px;
  background-color: ${Color.Graphite};
  border-radius: 10px;
  ${MEDIA.MD} {
    width: 100px;
  }
  ${MEDIA.SM} {
    justify-content: flex-end;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 264px;
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  background: ${Color.Primary};
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
  color: ${Color.White};
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
  color: ${Color.White};
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
  background: ${Color.Primary};
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
  border-top: 2px solid ${Color.White};
  border-bottom: 2px solid ${Color.White};
  ::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 0px;
    width: 100%;
    border-top: 2px solid ${Color.White};
  }
  ${MEDIA.MD} {
    display: block;
  }
  ${MEDIA.SM} {
  }
`;

const LinkContainer = styled.div`
  width: 260px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 100px;
  z-index: 1;
  background-color: ${Color.Graphite};
  border-radius: 10px;
  ${MEDIA.MD} {
    width: 100px;
  }
`;

const StyledLink = styled(Link)`
  ${H2}
  color: ${Color.Primary};
  ${MEDIA.MD} {
    ${H3}
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
  LinkContainer,
  ProfileContainer,
  StyledLink,
};
