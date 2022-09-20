import { getUser } from "store";
import { PropsWithChildren } from "react";
import { useAppSelector } from "../../store/hooks";
import { Wrapper } from "./styles";

export default function ThemeContextWrapper(props: PropsWithChildren) {
  const { isDarkTheme } = useAppSelector(getUser);

  return (
    <Wrapper isDarkTheme={isDarkTheme} className={isDarkTheme ? "dark" : "light"}>
      {props.children}
    </Wrapper>
  );
}
