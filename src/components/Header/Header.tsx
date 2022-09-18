import { ProfileForm } from "../ProfileForm/ProfileForm";
import { SearchInput } from "../SearchInput/SearchInput";
import { LogoWrapper, StyledHeader } from "./styles";
import { MovieopaIcon } from "../../assets";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "store";
import { useWindowSize } from "hooks";

export const Header = () => {
  const user = useAppSelector(getUser);
  const { width = 0 } = useWindowSize();

  return (
    <StyledHeader>
      <LogoWrapper>
        <MovieopaIcon />
      </LogoWrapper>
      <SearchInput />
      {width > 768 && <ProfileForm name={user && user.result?.displayName} />}
    </StyledHeader>
  );
};
