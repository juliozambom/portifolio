import { Container, ProjectPreview, ProjectDetails } from './styles';

import projects from '../../utils/projects';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

export default function ProjectDetailedCards() {
  return (
    <Container>
      {projects.map((project) => (
        <>
          <div className="project-container">
            <ProjectPreview src={project.image} />
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

              <div className="project-description">
                <p>{project.description}</p>
              </div>

              <div className="project-links">
                <a target="_blank" href={project.github}>
                  <AiOutlineGithub className="link-icon" />
                  <span>Repositório</span>
                </a>

                {project.deploy && (
                  <a target="_blank" href={project.deploy}>
                    <AiOutlineLink className="link-icon" />
                    <span>Deploy</span>
                  </a>
                )}
              </div>
            </ProjectDetails>
          </div>
          <hr />
        </>
      ))}
    </Container>
  );
}
