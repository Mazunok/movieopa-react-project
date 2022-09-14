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
import { ROUTE } from "../../router/routes";
import { useToggle } from "../../hooks/useToggle";
import { CustomLink } from "../CustomLink/CustomLink";
import { useAuth } from "hooks";

interface IProps {
  name: string | null;
}

export const ProfileForm = ({ name }: IProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const isAuth = useAuth();

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
        <BurgerContainer>
          <BurgerButton onClick={toggleIsOpen as () => void} />
        </BurgerContainer>
      </ProfileContainer>
      {isOpen && (
        <LinkContainer>
          {!isAuth && (
            <div>
              <CustomLink to={ROUTE.SIGN_UP}>Sign Up</CustomLink>
              <CustomLink to={ROUTE.SIGN_IN}>Sign In</CustomLink>
            </div>
          )}
          {isAuth && <CustomLink to={ROUTE.SIGN_IN}>LogOut</CustomLink>}
        </LinkContainer>
      )}
    </StyledContainer>
  );
};
