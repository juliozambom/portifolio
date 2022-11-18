import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10rem;

  .techs-list {
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 968px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
