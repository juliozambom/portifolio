import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 8rem;
  display: flex;

  button {
    background: ${({ theme }) => theme.colors.purple[300]};
    height: 3rem;
    margin-left: 2rem;
    border-radius: 0.7rem;
    position: relative;
    transition: all 0.15s ease-in;
    display: flex;
    justify-content: center;
    gap: 12px;

    &:hover {
      background: ${({ theme }) => theme.colors.purple[600]};
    }

    p {
      color: ${({ theme }) => theme.colors.purple[50]};
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      align-self: center;
    }

    .icon {
      align-self: center;
    }
  }

  .dropdown-menu {
    background: ${({ theme }) => theme.colors.purple[300]};
    height: 3rem;
    border-radius: 0.7rem;
    position: absolute;
    margin-top: 3.5rem;
    left: 0;
  }

  .active {
    background: ${({ theme }) => theme.colors.purple[900]};
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.colors.purple[500]};

    div {
      border: 1px solid ${({ theme }) => theme.colors.purple[200]};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.purple[800]};
    }
  }
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  width: 60%;
  background: ${({ theme }) => theme.colors.purple[300]};
  border: 0;
  height: 3rem;
  border-radius: 0.7rem;
  padding: 0 1.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.purple[50]};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    opacity: 0.7;
  }
`;

export const FilterTypeButton = styled.button`
  width: 20%;
`;

export const FilterTypeContainer = styled.div``;

export const OrderButton = styled.button`
  width: 25%;
`;

export const OrderTypeContainer = styled.div``;
