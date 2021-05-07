import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    *, ::after, ::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    } 
    body {
        font-family: 'Roboto';
        

    }
`;
