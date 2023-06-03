import { Link } from 'react-scroll';

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
              Desenvolvedor Full-Stack, atualmente atuando como Dev Jr. na empresa Curseduca.
            </p>
          </div>
        </PresentationContainer>
        <PresentationImage src={img} alt="Presentation Image" />
      </div>
      <Link to="Projects" smooth offset={-48} style={{ margin: '0 auto' }}>
        <Chevron strokeWidth={0.5} />
      </Link>
    </Container>
  );
}
