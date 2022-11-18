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

        @media (max-width: 360px) {
            font-size: 10px;
        }

        @media (max-width: 268px) {
            font-size: 8px;
        }
    }
    
    body {
        background: ${theme.light.colors.purple[400]};
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
