import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;

  @media (max-width: 1080px) {
    align-items: center;
  }

  .top {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1080px) {
      flex-direction: column;
    }
  }
`;

export const PresentationContainer = styled.div`
  max-width: 24rem;
  height: 17.5rem;

  @media (max-width: 1280px) {
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.purple[700]};
  }

  h2 {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 32px;
  }

  div {
    background: ${({ theme }) => theme.colors.purple[50]};
    padding: 1rem;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    color: ${({ theme }) => theme.colors.purple[900]};
    font-size: 1.2rem;
  }
`;

export const PresentationImage = styled.img`
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.5));
  border-radius: 24px 24px 0 0;
  width: 24.8rem;
  height: 16rem;

  @media (max-width: 1080px) {
    margin-top: 48px;
  }
`;

export const Chevron = styled(BsChevronDown)`
  color: ${({ theme }) => theme.colors.purple[700]};
  margin-top: 64px;
  width: 7.5rem;
  height: 3.5rem;
  animation: bounce 0.8s alternate-reverse infinite;
  cursor: pointer;

  @media (max-width: 1080px) {
    margin-top: 48px;
  }

  @keyframes bounce {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
