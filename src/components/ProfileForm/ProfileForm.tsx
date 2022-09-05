import {
  ArrowBtn,
  Avatar,
  AvatarName,
  BurgerButton,
  ProfileName,
  StyledContainer,
  BurgerContainer,
  LinkContainer,
} from "./styles";
import arrow from "../../assets/arrow.svg";
import { ROUTES } from "../../router/routes";
import { Link } from "react-router-dom";
import { useToggle } from "react-use";

export const ProfileForm = () => {
  const [isOpen, setIsOpen] = useToggle(false)

  return (
    <StyledContainer>
      <Avatar>
        <AvatarName>N M</AvatarName>
      </Avatar>
      <ProfileName>Nastya Mazun</ProfileName>
      <ArrowBtn onClick={setIsOpen} >
        <img src={arrow} alt="arrow"></img>
      </ArrowBtn>
      <BurgerContainer>
        <BurgerButton onClick={setIsOpen}/>
      </BurgerContainer>
      <LinkContainer >
        <Link to={`/${ROUTES.SIGN_UP}`}>Sign Up</Link>
        <Link to={`/${ROUTES.SIGN_UP}`}>Sign Up</Link>
      </LinkContainer>
    </StyledContainer>
  );
};


