import {
  ArrowBtn,
  Avatar,
  AvatarName,
  ProfileName,
  StyledContainer,
  LinkContainer,
  ProfileContainer,
} from "./styles";
import { ArrowIcon } from "../../assets";
import { ROUTE } from "../../router/routes";
import { useToggle } from "../../hooks/useToggle";
import { CustomLink } from "../CustomLink/CustomLink";

interface IProps {
  name?: string | null;
}

export const ProfileForm = ({ name }: IProps) => {
  const [isToggle, toggleIsOpen] = useToggle(false);

  return (
    <StyledContainer>
      <ProfileContainer>
        <Avatar>
          <AvatarName>N S</AvatarName>
        </Avatar>
        <ProfileName>{name ? name : "Sign in"}</ProfileName>
        <ArrowBtn onClick={toggleIsOpen as () => void}>
          <ArrowIcon />
        </ArrowBtn>
      </ProfileContainer>
      {isToggle && (
        <LinkContainer>
          <CustomLink to={name ? ROUTE.SETTINGS : ROUTE.SIGN_IN}>
            {name ? "Edit profile" : "Sign In"}
          </CustomLink>
          <CustomLink to={name ? ROUTE.LOG_OUT : ROUTE.SIGN_UP}>
            {name ? "Log Out" : "Sign Up"}
          </CustomLink>
        </LinkContainer>
      )}
    </StyledContainer>
  );
};
