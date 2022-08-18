import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background-color: black;
}

a{
    text-decoration:none;
}
`;
