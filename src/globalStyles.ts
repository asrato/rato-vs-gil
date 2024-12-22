import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        width: 100dvw;
        height: 100dvh;
        font-family: "Montserrat", sans-serif;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    * {
        margin: 0%;
        box-sizing: border-box;
    }
`;

export default GlobalStyles;

export const mediaQueries = {
    tablet: '@media (min-width: 968px)'
}