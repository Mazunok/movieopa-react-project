import styled from "styled-components";
import { Color } from "../../ui/colors";
import { S2, S3 } from "../../ui/typography";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 260px;
  background-color: ${Color.Graphite};
  border-radius: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Avatar = styled.div`
  position: relative;
  display: block;
  width: 56px;
  height: 56px;
  background: ${Color.Primary};
  border-radius: 10px;
`;

const AvatarName = styled.p`
  position: absolute;
  top: 16px;
  left: 15px;
  display: block;
  ${S2}
  font-size: 20;
  color: ${Color.White};
`;

const ProfileName = styled.p`
  display: block;
  ${S3};
  color: ${Color.White};
`;

const ArrowBtn = styled.button`
  display: block;
  width: 24px;
  height: 24px;
`;

export { StyledContainer, Avatar, AvatarName, ProfileName, ArrowBtn, ProfileContainer };
