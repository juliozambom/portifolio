import ProjectCard from '../../components/ProjectCard';
import { Container } from './styles';

export default function Projects() {
  return (
    <Container id="Projects">
      <h1 className="title">Projetos</h1>

      <div className="projects-list">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <button>Ver mais</button>
    </Container>
  );
}
