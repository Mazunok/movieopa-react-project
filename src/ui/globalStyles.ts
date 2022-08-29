import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

html, body {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth
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
}
`;
