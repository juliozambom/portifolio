import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        line-height: 1.5;
    }

    html {
        font-size: 20px;

        @media (max-width: 1280px) {
            font-size: 18px;
        }

        @media (max-width: 1080px) {
            font-size: 16px;
        }

        @media (max-width: 768px) {
            font-size: 14px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
    
    body {
        max-width: 1400px;
        width: 90%;
        background: ${theme.light.colors.purple[400]};
        margin: 0 auto;
        font-family: 'Poppins', sans-serif;
        color: ${theme.light.colors.purple[50]};
    }

    button {
        cursor: pointer;
        border: 0;
    }

    .title {
    font-size: 2rem;
    color: ${theme.light.colors.purple[700]};
  }
`;
