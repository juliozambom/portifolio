import { Container, ProjectDetails } from './styles';

import { IProject } from '../../utils/projects';

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Container>
      <div className="project-image-container">
        <a target="_blank" href={project.deploy || project.github}>
          <img
            className="project-preview"
            src={project.image}
          />
        </a>
      </div>

      <ProjectDetails>
        <div className="top">
          <h1 className="project-title">{project.name}</h1>
          <span className="area">{project.area}</span>
        </div>
        <div className="techs-container">
          {project.technologies.map((tech, index) => {
            if(index < 3) {
              return (
                <span className="techs">{index < 2 ? `${tech} |` : tech}</span>
              )
            }
          })}
        </div>
      </ProjectDetails>
    </Container>
  );
}
