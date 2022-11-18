import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 3.5rem;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .button-wrapper {
    display: flex;
    width: 75%;
    justify-content: space-between;

    @media (max-width: 768px) {
      margin-top: 1rem;
      width: 100%;
    }
  }

  button {
    background: ${({ theme }) => theme.colors.purple[300]};
    height: 3rem;
    margin-left: 0rem;
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
  width: 100%;
  background: ${({ theme }) => theme.colors.purple[300]};
  border: 0;
  height: 3rem;
  border-radius: 0.7rem;
  padding: 0 1.5rem;
  margin-right: 5%;
  outline: 0;
  color: ${({ theme }) => theme.colors.purple[50]};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.purple[50]};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    opacity: 0.7;
  }
`;

export const FilterTypeButton = styled.button`
  width: 40%;
  margin-right: 2%;
`;

export const FilterTypeContainer = styled.div``;

export const OrderButton = styled.button`
  width: 55%;
`;

export const OrderTypeContainer = styled.div``;
