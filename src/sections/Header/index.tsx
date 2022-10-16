import {
  Container,
  PresentationContainer,
  PresentationImage,
  Chevron,
} from './styles';
import img from '../../assets/header-img.png';

export default function Header() {
  return (
    <Container>
      <div className="top">
        <PresentationContainer>
          <h1>Olá</h1>
          <h2>Prazer, Júlio!</h2>
          <div>
            <p>
              Dev front-end, em busca de um primeiro emprego, venha conhecer um
              pouco do meu trabalho!
            </p>
          </div>
        </PresentationContainer>
        <PresentationImage src={img} alt="Presentation Image" />
      </div>
      <Chevron strokeWidth={0.5} />
    </Container>
  );
}
