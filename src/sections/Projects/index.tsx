import { useNavigate } from 'react-router-dom';

import ProjectCard from '../../components/ProjectCard';
import projects from '../../utils/projects';
import { Container } from './styles';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Container id="Projects">
      <h1 className="title">Projetos</h1>

      <div className="projects-list">
        {projects.map(
          (project, index) =>
            index < 6 && <ProjectCard key={project.name} project={project} />
        )}
      </div>

      <button onClick={() => navigate('/projects')}>Ver mais</button>
    </Container>
  );
}
