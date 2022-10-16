import { Container, ProjectDetails } from './styles';

export default function ProjectCard() {
  return (
    <Container>
      <div className="project-image-container">
        <img
          className="project-preview"
          src="https://camo.githubusercontent.com/c20bb05671ff3096b4a8d7c6bd26602f2ab7c3c0dbe8e793560d3a4275ec1d3e/68747470733a2f2f692e696d6775722e636f6d2f535566754b6b492e706e67"
        />
      </div>

      <ProjectDetails>
        <div>
          <h1 className="project-title">BetterWorld</h1>
          <span className="area">Front-end</span>
        </div>
        <span className="techs">HTML • CSS • JAVASCRIPT</span>
      </ProjectDetails>
    </Container>
  );
}
