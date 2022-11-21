import styled from 'styled-components';
// arruda esteve aqui

export const Container = styled.div`
  margin-top: 10rem;

  p {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  span {
    color: ${({ theme }) => theme.colors.purple[700]};
    display: block;
    margin-bottom: 32px;
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
    transition: all 0.4s ease-in-out;
    color: ${({ theme }) => theme.colors.purple[700]};
  }

  .icon:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  .icon:active {
    transform: scale(0.95);
  }

  h2 {
    font-size: 18px;
    color: #fff;
    border: 0.1rem solid white;
    padding: 8px 12px;
    animation: pull 1s alternate-reverse infinite;
    display: inline-block;
    transition: all 0.2s ease-in;

    @media (max-width: 768px) {
      font-size: 14px;
    } 

    &:hover {
      color: ${({ theme }) => theme.colors.purple[900]};
      border: 0.1rem solid ${({ theme }) => theme.colors.purple[900]};
    }

    @keyframes pull{
      0% {
        transform: scale(1);
      }

      100% {
        transform: scale(1.05);
      }
    }
  }
`;
