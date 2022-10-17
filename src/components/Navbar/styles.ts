import styled from 'styled-components';

export const Container = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    overflow: hidden;
    animation: typing 6s steps(${({ numberOfLetters }) => numberOfLetters + 8})
      infinite;
    width: 0;

    &:after {
      content: '';
      margin-left: 2px;
      border-right: 2px solid ${({ theme }) => theme.colors.purple[700]};
      font-size: 32px;
    }

    h1 {
      font-weight: 800;
      font-size: 32px;
      overflow: hidden;
      color: ${({ theme }) => theme.colors.purple[50]};
    }

    @keyframes typing {
      30% {
        width: 4px;
      }

      45% {
        width: ${({ numberOfLetters }) => numberOfLetters * 24 + 60}px;
      }

      80% {
        width: ${({ numberOfLetters }) => numberOfLetters * 24 + 60}px;
      }

      10% {
        width: 4px;
      }
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 40px;
`;

export const Link = styled.a`
  color: inherit;
  border-bottom: 2px solid transparent;

  &::after {
    content: '';
    display: flex;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.purple[50]};
    height: 0.1rem;
    width: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
