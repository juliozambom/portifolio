import { Container } from './styles';
import { DiJavascript1 } from 'react-icons/di';

export default function TechCard() {
  return (
    <Container>
      <div className="tech-wrapper">
        <div className="tech-icon">
          <DiJavascript1 className="tech-icon" />
        </div>
      </div>
      <span className="tech-name">JavaScript</span>
    </Container>
  );
}
