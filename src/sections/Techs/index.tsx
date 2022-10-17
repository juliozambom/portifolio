import TechCard from '../../components/TechCard';
import { Container } from './styles';

export default function Techs() {
  return (
    <Container id="Techs">
      <h1 className="title">Tecnologias</h1>

      <div className="techs-list">
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
    </Container>
  );
}
