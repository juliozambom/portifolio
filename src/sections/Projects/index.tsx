import ProjectCard from '../../components/ProjectCard';
import projects from '../../utils/projects';
import { Container } from './styles';

export default function Projects() {
  return (
    <Container id="Projects">
      <h1 className="title">Projetos</h1>

      <div className="projects-list">
        {projects.map(
          (project, index) =>
            index < 6 && <ProjectCard key={project.name} project={project} />
        )}
      </div>

      <button>Ver mais</button>
    </Container>
  );
}
