import styled from 'styled-components';

interface IContainerProps {
  maxWordLength: number;
  wordsQuantity: number;
}

export const Container = styled.nav<IContainerProps>`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 90%;
  max-width: 1400px;

  .static-container {
    display: flex;
    overflow: hidden;
    width: calc(100% + 2px);
  }

  .dynamic-text-list {
    height: 3.8rem;
  }

  .dynamic-text {
    height: 3.8rem;
    animation: slide
      ${({ wordsQuantity }) =>
        `${wordsQuantity * 6}s steps(${wordsQuantity}) infinite`};

    @keyframes slide {
      100% {
        transform: translateY(
          ${({ wordsQuantity }) => wordsQuantity * -3.8}rem
        );
      }
    }
  }

  .dynamic-text span {
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    line-height: 3.8rem;
    font-size: 1.6rem;
    position: relative;

    &::after {
      content: '';
      left: 0;
      position: absolute;
      height: 2.5rem;
      margin-top: 8px;
      width: 100%;
      animation: typing 6s steps(${({ maxWordLength }) => maxWordLength})
        infinite;
      background: ${({ theme }) => theme.colors.purple[400]};
      border-left: 2.5px solid ${({ theme }) => theme.colors.purple[700]};
    }

    @keyframes typing {
      20% {
        left: 0;
      }

      40% {
        left: 100%;
      }

      90% {
        left: 100%;
      }

      100% {
        left: 0;
      }
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 40px;

  li {
    color: inherit;
    border-bottom: 2px solid transparent;
    cursor: pointer;

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

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-menu {
    width: 2rem;
    height: 2rem;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
