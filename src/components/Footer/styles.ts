import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.purple[900]};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  p {
    padding: 2rem 0;
  }

  b {
    color: ${({ theme }) => theme.colors.purple[400]};
    font-weight: 500;
  }
`;
