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
  }

  .icon:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  h2 {
    font-size: 1.3rem;
    color: #fff;
    border: 0.1rem solid white;
    padding: 8px 12px;
    display: inline;
  }
`;
