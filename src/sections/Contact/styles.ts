import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 150px;

  p {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  span {
    color: ${({ theme }) => theme.colors.purple[700]};
  }

  .links {
    margin-top: 2rem;
    display: flex;
    gap: 0.5rem;
  }

  .icon {
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
  }

  .icon:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;
