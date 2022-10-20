import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import { Container } from './styles';

export default function MobileMenu() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="About" smooth offset={-48}>
            <span>Sobre</span>
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth offset={-48}>
            <span>Projetos</span>
          </Link>
        </li>
        <li>
          <Link to="Techs" smooth offset={-48}>
            <span>Tecnologias</span>
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth offset={-48}>
            <span>Contato</span>
          </Link>
        </li>
      </ul>
      <AiOutlineClose className="close-icon" />
    </Container>
  );
}
