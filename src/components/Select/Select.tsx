import Select, { SingleValue } from "react-select";
import { ITheme } from "../../types";
import { stylesConfig } from "./styles";

interface IProps {
  theme: ITheme;
  handleSelect: (option: SingleValue<ITheme> | null) => void;
}

export const CustomSelect = ({ theme, handleSelect }: IProps) => {
  const htmlTag = document.documentElement;
  htmlTag.setAttribute("theme", "dark");

  const options: ITheme[] = [
    { value: "light", label: "light" },
    { value: "dark", label: "dark" },
  ];

  return (
    <Select
      options={options}
      defaultValue={theme}
      onChange={handleSelect}
      styles={stylesConfig}
      isMulti={false}
    />
  );
};
