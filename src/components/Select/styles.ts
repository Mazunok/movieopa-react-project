import { StylesConfig } from "react-select";
import { ITheme } from "../../types";
import { Color } from "ui";

export const stylesConfig: StylesConfig<ITheme> = {
  option: (styles) => ({
    ...styles,
    background: `${Color.Dark}`,
    color: `${Color.White}`,
  }),
  control: (styles) => ({
    ...styles,
    height: "68px",
    marginBottom: "45px",
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "26px",
    textAlign: "center",
    background: `${Color.Dark}`,
    borderRadius: "20px",
    borderColor: `${Color.Dark}`,
    color: `${Color.White}`,
  }),
};
