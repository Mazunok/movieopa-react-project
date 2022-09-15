import { CustomSelect } from "components/Select/Select";
import { useState } from "react";
import { SingleValue } from "react-select";
import { ITheme } from "types";
import { StyledContainer, StyledTitle, StyledWrapper, InfoContainer, StyledText } from "./styles";

export const SettingsForm = () => {
  const [theme, setTheme] = useState<ITheme>({
    label: "Dark",
    value: "dark",
  });
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
          <StyledText>Name: </StyledText>
          <StyledText>Email:</StyledText>
        </StyledContainer>
      </InfoContainer>
      <InfoContainer>
        <CustomSelect theme={theme} handleSelect={handleSelect}></CustomSelect>
      </InfoContainer>
    </StyledWrapper>
  );
};
