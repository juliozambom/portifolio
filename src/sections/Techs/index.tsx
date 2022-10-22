import TechCard from '../../components/TechCard';
import { Container } from './styles';

import techs from '../../utils/techs';

export default function Techs() {
  return (
    <Container id="Techs">
      <h1 className="title">Tecnologias</h1>
      <div className="techs-list">
        {techs.map((tech) => (
          <TechCard name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </Container>
  );
}
