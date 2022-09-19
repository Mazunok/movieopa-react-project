import { toggleTheme } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { Toggle } from "./styles";

export default function ThemeToggle(props: { isDarkTheme: boolean }) {
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return <Toggle isDarkTheme={props.isDarkTheme} onClick={toggle} />;
}
