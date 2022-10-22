import { Container } from './styles';

import { ITech } from '../../utils/techs';

import img from '../../assets/techs/js.png';

export default function TechCard({ name, icon }: ITech) {
  return (
    <Container>
      <div className="tech-wrapper">
        <img className="tech-icon" src={icon} />
      </div>
      <h2 className="tech-name">{name}</h2>
    </Container>
  );
}
