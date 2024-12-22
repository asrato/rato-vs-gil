import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        width: 100dvw;
        height: 100dvh;
        font-family: "Montserrat", sans-serif;
        background-color: ${({ theme }) => theme.mainLayout.background};
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
};

export const theme = {
    mainLayout: {
        background: '#111111',
        color: '#e9e9e9'
    },
    players: {
        gil: {
            primary: '#6d4cff',
            secondary: '#6d4cff8f'
        },
        rato: {
            primary: '#ff4c4c',
            secondary: '#ff4c4c8f'
        }
    },
    lastMatch: {
        date: {
            color: '#FFFFFF60'
        },
        score: {
            background: '#FFFFFF20'
        }
    },
    matchHistory: {
        border: '#ffffff08',
        date: {
            color: '#FFFFFF90'
        }
    }
};