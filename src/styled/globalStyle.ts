import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }

    html,body{
        overflow-x: hidden;
    }

    body {
        height: 100vh;
        margin: 0;
        font-family: "Helvetica Neue", "Segoe UI", "Droid Sans", sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.l};;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};

        @media (max-width: 700px) {
            font-size: ${({ theme }) => theme.fontSizes.m};
            height: unset;
        }
    }

    button {
        padding: 0;
        font-family: "Helvetica Neue", "Segoe UI", "Droid Sans", sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.m};
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.button};
        cursor: pointer;
    }
`;

export default GlobalStyle;
