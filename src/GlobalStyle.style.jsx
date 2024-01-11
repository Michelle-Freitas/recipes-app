import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: ${theme.colors.bg};
        width: 100vw;
        height: 100%;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }
`
