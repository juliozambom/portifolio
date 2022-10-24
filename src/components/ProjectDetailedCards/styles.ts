import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  .project-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
  }
`;

export const ProjectPreview = styled.img`
  width: 55%;
`;

export const ProjectDetails = styled.div`
  padding-left: 5%;
  width: 100%;
  position: relative;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-title {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }

  .area {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  .techs-container {
    margin-top: 0.5rem;
  }

  .techs {
    color: ${({ theme }) => theme.colors.purple[700]};
    font-size: 1rem;
    margin-right: 12px;
  }

  .project-description {
    margin-top: 16px;
    opacity: 0.7;
  }

  .project-links {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;

    a {
      display: flex;
      align-items: center;
      gap: 16px;
      border: 2px solid transparent;
      padding: 4px 8px;
      border-radius: 24px;
      margin-left: -8px;
      transition: all 0.2s ease-in;
    }

    a:hover {
      border: 2px solid ${({ theme }) => theme.colors.purple[700]};
    }

    span {
      color: ${({ theme }) => theme.colors.purple[50]};
      font-size: 1.1rem;
      line-height: 1.1rem;
    }

    .link-icon {
      width: 2rem;
      height: auto;
    }
  }
`;
