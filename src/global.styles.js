import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Barlow Condensed', sans-serif;
        padding: 20px 10px 0 10px;

        @media screen and (max-width: 800px) {
            padding: 10px 0 0 0;
        }
    }

    a {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;