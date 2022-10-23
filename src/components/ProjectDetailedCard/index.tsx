import { Container, ProjectPreview, ProjectDetails } from "./styles";

import projects from "../../utils/projects";

export default function ProjectDetailedCard() {
    return (
        <Container >
            {projects.map((project) => (
            <div className="project-container">
                <ProjectPreview src={project.image}/>
                <ProjectDetails>
                    <div className="top">
                        <h1 className="project-title">{project.name}</h1>
                        <span className="area">{project.area}</span>
                    </div>
                </ProjectDetails>
            </div>
            ))}
        </Container>
    )
}