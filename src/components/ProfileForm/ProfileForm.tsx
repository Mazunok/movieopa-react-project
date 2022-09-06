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
  StyledLink
} from "./styles";
import arrow from "../../assets/arrow.svg";
import { ROUTES } from "../../router/routes"
import { useToggle } from "../../hooks/useToggle";

export const ProfileForm = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <StyledContainer>
      <ProfileContainer>
        <Avatar>
          <AvatarName>N M</AvatarName>
        </Avatar>
        <ProfileName>Nastya Mazun</ProfileName>
        <ArrowBtn onClick={toggleIsOpen} isOpen={isOpen}>
          <img src={arrow} alt="arrow"></img>
        </ArrowBtn>
        <BurgerContainer>
          <BurgerButton onClick={toggleIsOpen} isOpen={isOpen} />
        </BurgerContainer>
      </ProfileContainer>
      {isOpen && (
        <LinkContainer>
          <StyledLink to={`/${ROUTES.SIGN_UP}`}>Sign Up</StyledLink>
          <StyledLink to={`/${ROUTES.SIGN_IN}`}>Sign In</StyledLink>
        </LinkContainer>
      )}
    </StyledContainer>
  );
};
