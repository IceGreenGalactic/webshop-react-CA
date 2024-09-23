import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
--color-primary: #008C7A;
--color-secondary: #FF8C42;
--color-background: #F0F0F0;
--color-cards-background: #FAE8DD;
--color-btnHover-background:#db7535;
height: 100%;
}
body{
background: #F0F0F0;
font-family: 'Lato', sans-serif;
}

`;

export default GlobalStyle