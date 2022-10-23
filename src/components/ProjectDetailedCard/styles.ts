import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5rem;

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
`;