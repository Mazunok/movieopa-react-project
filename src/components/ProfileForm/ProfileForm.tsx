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
import arrow from "../../assets/arrow.svg";
import { ROUTES } from "../../router/routes";
import { useToggle } from "../../hooks/useToggle";
import { CustomLink } from "../CustomLink/CustomLink";

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
          <CustomLink to={`/${ROUTES.SIGN_UP}`}>Sign Up</CustomLink>
          <CustomLink to={`/${ROUTES.SIGN_IN}`}>Sign In</CustomLink>
        </LinkContainer>
      )}
    </StyledContainer>
  );
};
