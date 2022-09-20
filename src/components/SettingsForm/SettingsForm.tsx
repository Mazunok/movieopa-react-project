import { ThemeToggle } from "components/ThemeToggle";
import { getUser, useAppSelector } from "store";
import { StyledContainer, StyledTitle, StyledWrapper, InfoContainer, StyledText } from "./styles";

export const SettingsForm = () => {
  const user = useAppSelector(getUser);
  const { isDarkTheme } = useAppSelector(getUser);

  return (
    <StyledWrapper>
      <InfoContainer>
        <StyledTitle isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
          Profile
        </StyledTitle>
        <StyledContainer isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
          <StyledText>Name:{user && user.result?.displayName} </StyledText>
          <StyledText>Email:{user && user.result?.email}</StyledText>
        </StyledContainer>
      </InfoContainer>
      <InfoContainer>
        <StyledTitle isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
          Change Theme Here
        </StyledTitle>
        <StyledContainer isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
          <ThemeToggle isDarkTheme={user.isDarkTheme} />
        </StyledContainer>
      </InfoContainer>
    </StyledWrapper>
  );
};
