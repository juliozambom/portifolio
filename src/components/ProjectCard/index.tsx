import { Container, ProjectDetails } from './styles';

import { IProject } from '../../utils/projects';

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  function renderTechs(tech: string, index: number) {
    if (!((index + 1) % 3 === 0)) {
      return tech + '•';
    }

    return tech;
  }

  return (
    <Container>
      <div className="project-image-container">
        <img
          className="project-preview"
          src="https://camo.githubusercontent.com/c20bb05671ff3096b4a8d7c6bd26602f2ab7c3c0dbe8e793560d3a4275ec1d3e/68747470733a2f2f692e696d6775722e636f6d2f535566754b6b492e706e67"
        />
      </div>

      <ProjectDetails>
        <div className="top">
          <h1 className="project-title">{project.name}</h1>
          <span className="area">{project.area}</span>
        </div>
        <div className="techs-container">
          {project.technologies.map((tech) => (
            <span className="techs">{tech}</span>
          ))}
        </div>
      </ProjectDetails>
    </Container>
  );
}
