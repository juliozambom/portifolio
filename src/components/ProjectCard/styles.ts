import styled from 'styled-components';

export const Container = styled.div`
  .project-image-container {
    background: linear-gradient(
      109.58deg,
      rgba(50, 38, 89, 0.5) 12.63%,
      rgba(250, 245, 255, 0.5) 94.5%
    );
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.01);
    }
  }

  .project-preview {
    display: flex;
    width: 100%;
    opacity: 0.5;
    transition: all 0.2s ease-in;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const ProjectDetails = styled.div`
  margin-top: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    color: ${({ theme }) => theme.colors.purple[50]};
    font-size: 1.6rem;
  }

  .area {
    font-size: 1.1rem;
  }

  .techs {
    color: ${({ theme }) => theme.colors.purple[700]};
    font-weight: 600;
  }
`;
