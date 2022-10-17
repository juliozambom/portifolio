import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;

  .top {
    display: flex;
    justify-content: space-between;
  }
`;

export const PresentationContainer = styled.div`
  max-width: 24rem;
  height: 17.5rem;

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
    padding: 20px;
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
  height: 17.5rem;
`;

export const Chevron = styled(BsChevronDown)`
  color: ${({ theme }) => theme.colors.purple[700]};
  margin: 0 auto;
  margin-top: 120px;
  width: 150px;
  height: 75px;
  animation: bounce 0.8s alternate-reverse infinite;

  @keyframes bounce {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
