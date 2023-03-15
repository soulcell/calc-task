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
        font-size: 32px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};

        @media (max-width: 700px) {
            font-size: 21px;
            height: unset;
        }
    }

    button {
        padding: 0;
        font-family: "Helvetica Neue", "Segoe UI", "Droid Sans", sans-serif;
        font-size: 32px;
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.button};
    }
`;

export default GlobalStyle;
