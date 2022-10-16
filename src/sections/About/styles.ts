import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

export const Container = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .about-text {
    max-width: 50%;
  }

  .short-bio {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  b {
    color: ${({ theme }) => theme.colors.purple[700]};
    font-weight: 500;
  }

  .line {
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.purple[50]};
    margin: 32px 0;
  }
`;

export const ReactIcon = styled(FaReact)`
  width: 25rem;
  height: auto;
  color: ${({ theme }) => theme.colors.purple[800]};
`;
