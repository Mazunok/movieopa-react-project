import { CustomSelect } from "components/Select/Select";
import { useState } from "react";
import { SingleValue } from "react-select";
import { getUser, useAppSelector } from "store";
import { ITheme } from "types";
import { StyledContainer, StyledTitle, StyledWrapper, InfoContainer, StyledText } from "./styles";

export const SettingsForm = () => {
  const [theme, setTheme] = useState<ITheme>({
    label: "Dark",
    value: "dark",
  });

  const user = useAppSelector(getUser);

  const handleSelect = (option: SingleValue<ITheme>): void => {
    if (option) {
      setTheme(option);
    }
  };
  return (
    <StyledWrapper>
      <InfoContainer>
        <StyledTitle>Profile</StyledTitle>
        <StyledContainer>
          <StyledText>Name:{user && user.result?.displayName} </StyledText>
          <StyledText>Email:{user && user.result?.email}</StyledText>
        </StyledContainer>
      </InfoContainer>
      <InfoContainer>
        <CustomSelect theme={theme} handleSelect={handleSelect}></CustomSelect>
      </InfoContainer>
    </StyledWrapper>
  );
};
