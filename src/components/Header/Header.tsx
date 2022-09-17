import { ProfileForm } from "../ProfileForm/ProfileForm";
import { SearchInput } from "../SearchInput/SearchInput";
import { LogoWrapper, StyledHeader } from "./styles";
import { MovieopaIcon } from "../../assets";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "store";

export const Header = () => {
  const user = useAppSelector(getUser);
  return (
    <StyledHeader>
      <LogoWrapper>
        <MovieopaIcon />
      </LogoWrapper>
      <SearchInput />
      <ProfileForm name={user && user.result?.displayName}  />
    </StyledHeader>
  );
};
