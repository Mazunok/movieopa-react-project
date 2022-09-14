import {
  ArrowBtn,
  Avatar,
  AvatarName,
  BurgerButton,
  ProfileName,
  StyledContainer,
  BurgerContainer,
  LinkContainer,
  ProfileContainer,
} from "./styles";
import { ArrowIcon } from "../../assets";
import { ROUTES } from "../../router/routes";
import { useToggle } from "../../hooks/useToggle";
import { CustomLink } from "../CustomLink/CustomLink";
import { useAuth } from "hooks";
import { useWindowSize } from "react-use";
import { MEDIA } from "ui";

interface IProps {
  name: string | null;
}

export const ProfileForm = ({ name }: IProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const isAuth = useAuth();
  const size = useWindowSize();

  return (
    <StyledContainer>
      <ProfileContainer>
        <Avatar>
          <AvatarName>N S</AvatarName>
        </Avatar>
        <ProfileName>{name ? name : "Sign in"}</ProfileName>
        <ArrowBtn onClick={toggleIsOpen} isOpen={isOpen}>
          <ArrowIcon />
        </ArrowBtn>
        <BurgerContainer>
          <BurgerButton onClick={toggleIsOpen} isOpen={isOpen} />
        </BurgerContainer>
      </ProfileContainer>
      {isOpen && (
        <LinkContainer>
          <CustomLink to={ROUTES.SIGN_UP}>Sign Up</CustomLink>
          <CustomLink to={ROUTES.SIGN_IN}>Sign In</CustomLink>
        </LinkContainer>
      )}
    </StyledContainer>
  );
};
