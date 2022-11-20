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
    transition: all 0.15s ease-in;
    display: flex;
    justify-content: center;
    gap: 12px;
    width: 100%;

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
    border-radius: 0.7rem;
    position: absolute;
    display: flex;
    margin-top: 0.5rem;
    overflow: hidden;
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

export const FilterTypeButton = styled.div`
  width: 40%;
  margin-right: 2%;
  position: relative;
`;

export const FilterTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 12px;
  gap: 4px;
  z-index: 10;

  .active {
    background: ${({ theme }) => theme.colors.purple[500]};
  }

  span {
    font-size: 1rem;
    padding: 8px 24px;
    border-radius: 8px;
    white-space: nowrap;

    &:hover {
      background: ${({ theme }) => theme.colors.purple[500]};
      cursor: pointer;
    }
  }
`;

export const OrderButton = styled.div`
  width: 55%;
  position: relative;
`;

export const OrderTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 12px;
  gap: 4px;
  z-index: 10;

  .active {
      background: ${({ theme }) => theme.colors.purple[500]};
  }

  span {
    font-size: 1rem;
    padding: 8px 24px;
    border-radius: 8px;
    white-space: nowrap;

    &:hover {
      background: ${({ theme }) => theme.colors.purple[500]};
      cursor: pointer;
    }
  }
`;
