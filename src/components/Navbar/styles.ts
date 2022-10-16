import styled from 'styled-components';

export const Container = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 32px;
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
