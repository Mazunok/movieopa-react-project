import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
}

html, body {
  line-height: 1.15;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  background-color: ${Color.Black};
}

#root{
  height: 100%;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd, span {
  margin: 0;
}

ul[class],
ol[class] {
  padding: 0;
}

a{
    text-decoration:none;
    background-color: transparent;
}

img {
  max-width: 100%;
  display: block;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

button,
input,
optgroup,
select,
textarea {
    line-height: inherit;
    border: 1px solid currentColor;
}

select {
    text-transform: none;
}

ol ol,
ol ul,
ol dl,
ul ol,
ul ul,
ul dl,
dl ol,
dl ul,
dl dl {
    margin: 0;
}
`;
