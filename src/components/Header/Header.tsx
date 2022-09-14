import { ProfileForm } from "../ProfileForm/ProfileForm";
import { SearchInput } from "../SearchInput/SearchInput";
import { LogoWrapper, StyledHeader } from "./styles";
import { MovieopaIcon } from "../../assets";
import { useAppSelector } from "../../store/hooks";

export const Header = () => {
  const user = useAppSelector((state) => state.persistedReducer.user.result);
  return (
    <StyledHeader>
      <LogoWrapper>
        <MovieopaIcon />
      </LogoWrapper>
      <SearchInput />
      <ProfileForm name={user && user.displayName} />
    </StyledHeader>
  );
};
