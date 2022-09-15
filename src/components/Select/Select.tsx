import Select, { SingleValue } from "react-select";
import { ITheme } from "../../types";
import { stylesConfig } from "./styles";

interface IProps {
  theme: ITheme;
  handleSelect: (option: SingleValue<ITheme> | null) => void;
}

export const CustomSelect = ({ theme, handleSelect }: IProps) => {
  const options: ITheme[] = [
    { value: "Light", label: "light" },
    { value: "Dark", label: "dark" },
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
