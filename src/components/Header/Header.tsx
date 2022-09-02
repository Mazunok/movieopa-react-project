import React from "react";
import { ProfileForm } from "../ProfileForm/ProfileForm";
import { SearchInput } from "../SearchInput/SearchInput";
import { Logo, StyledHeader } from "./styles";
import movieopa from "../../assets/movieOpa.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo src={movieopa} alt="logo" />
      <SearchInput placeholder={"Search"} value={""} />
      <ProfileForm />
    </StyledHeader>
  );
};
