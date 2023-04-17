import { createGlobalStyle } from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

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
        margin: ${({ theme }) => theme.margins.zero};
        font-family: "Helvetica Neue", "Segoe UI", "Droid Sans", sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.l};;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};

        @media (max-width: ${`${ScreenSizes.Desktop}px`}) {
            font-size: ${({ theme }) => theme.fontSizes.m};
            height: unset;
        }
    }

    button {
        padding: ${({ theme }) => theme.paddings.zero};
        font-family: "Helvetica Neue", "Segoe UI", "Droid Sans", sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.m};
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.button};
        cursor: pointer;
    }
`;

export default GlobalStyle;
