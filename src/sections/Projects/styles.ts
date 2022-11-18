import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;

  .projects-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px;
    margin-top: 48px;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  button {
    margin: 0 auto;
    margin-top: 64px;
    padding: 8px 48px;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.purple[800]};
    color: ${({ theme }) => theme.colors.purple[50]};
    font-family: 'Poppins', sans-serif;
    transition: all 0.2s ease-in;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      background: ${({ theme }) => theme.colors.purple[900]};
      color: ${({ theme }) => theme.colors.purple[50]};
      transform: scale(1.01);
    }

    &:active {
      transform: scale(0.99);
    }
  }
`;
