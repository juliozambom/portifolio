import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .tech-wrapper {
    background: ${({ theme }) => theme.colors.purple[700]};
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .tech-icon {
    width: 5rem;
    height: 5rem;
    color: yellow;
  }

  .tech-name {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
