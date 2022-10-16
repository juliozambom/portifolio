import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body {
        max-width: 90%;
        background: ${theme.light.colors.purple[400]};
        margin: 0 auto;
    }
`;
