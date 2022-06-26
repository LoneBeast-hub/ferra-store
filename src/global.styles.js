import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Barlow Condensed', sans-serif;
        padding: 20px 40px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;