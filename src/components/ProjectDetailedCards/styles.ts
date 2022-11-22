import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;

  .project-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;

    @media (max-width: 856px) {
      flex-direction: column;
    }
  }

  hr {
    margin: 3rem 0 2rem 0;
    color: red;
  }

  .project-preview-container {
    width: 130%;
    height: 100%;
    background: linear-gradient(
      109.58deg,
      rgba(50, 38, 89, 0.5) 12.63%,
      rgba(250, 245, 255, 0.5) 94.5%
    );

    @media (max-width: 856px) {
      width: 100%;
    }
  }
`;

export const ProjectPreview = styled.img`
  display: flex;
  width: 100%;
  opacity: 0.7;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.01);
    opacity: 1;
    cursor: pointer;
  }
  
  @media (max-width: 856px) {
      width: 100%;
    }
`;

export const ProjectDetails = styled.div`
  padding-left: 5%;
  width: 100%;
  position: relative;

  @media (max-width: 856px) {
      padding-left: 0; 
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-title {
    font-size: 1.7rem;
    line-height: 1.7rem;

    @media (max-width: 856px) {
      margin-top: 2rem;   
    }
  }

  .area {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  .techs-container {
    display: flex;
    margin-top: 0.5rem;
    flex-wrap: wrap;
  }

  .techs {
    color: ${({ theme }) => theme.colors.purple[700]};
    font-size: 1rem;
    margin-right: 12px;
  }

  .project-description {
    margin-top: 16px;
    opacity: 0.7;

    p {
      font-size: 18px;
      margin-bottom: 3em;
    }
  }

  .project-links {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 856px) {
      position: static;
      flex-direction: row;
      margin-top: 2rem;
    }

    a {
      display: flex;
      align-items: center;
      gap: 16px;
      border: 2px solid transparent;
      padding: 4px 8px;
      border-radius: 24px;
      margin-left: -8px;
      transition: all 0.2s ease-in;

      span {
        color: ${({ theme }) => theme.colors.purple[50]};
        font-size: 1rem;
        line-height: 1.1rem;
      }

      .link-icon {
        width: 1.5rem;
        height: auto;
        color: ${({ theme }) => theme.colors.purple[900]};
        opacity: 0.6;
        transition: all 0.2s ease-in;
      }

      @media (max-width: 856px) {
        & + a {
          margin-left: 24px;
        }
      }
    }

    a:hover {
      border: 2px solid ${({ theme }) => theme.colors.purple[700]};

      .link-icon {
        opacity: 1;
      }
    }

    a:active {
      border: 2px solid ${({ theme }) => theme.colors.purple[900]};
      transform: scale(1.03);
    }
  }
`;
