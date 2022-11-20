import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

import { Container, ProjectPreview, ProjectDetails } from './styles';

import { IProject } from '../../utils/projects';

interface IProjectDetailedCards {
  projects: IProject[];
}

export default function ProjectDetailedCards({ projects }: IProjectDetailedCards) {

  if(projects.length === 0) {
    return (
      <Container>
        Nenhum projeto foi encontrado!
      </Container>
    )
  }

  return (
    <Container>
      {projects.map((project, index) => (
        <div key={project.name}>
          <div className="project-container">
            <div className="project-preview-container">
              <a target="_blank" href={project.deploy || project.github}>
                <ProjectPreview src={project.image}/>
              </a>
            </div>
            <ProjectDetails>
              <div className="top">
                <h1 className="project-title">{project.name}</h1>
                <span className="area">{project.area}</span>
              </div>
              <div className="techs-container">
                {project.technologies.map((tech) => (
                  <span className="techs" key={tech}>{tech}</span>
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
          {index < projects.length - 1 && (
            <hr />
          )}
        </div>
      ))}
    </Container>
  );
}
