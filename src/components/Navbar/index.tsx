import { Link } from 'react-scroll';
import { Container, NavLinks } from './styles';

export default function Navbar() {
  const phrases = [
    'div',
    'react',
    'nodejs',
    'reactnative',
    'typescript',
    'javascript',
    'juliozambom',
  ];

  const maxWordLength = Math.max(...phrases.map((phrase) => phrase.length));

  return (
    <Container maxWordLength={maxWordLength} wordsQuantity={phrases.length}>
      <div className="static-container">
        <div className="dynamic-text-list">
          {phrases.map((phrase) => (
            <div key={phrase} className="dynamic-text">
              <span>{`</${phrase}>`}</span>
            </div>
          ))}
        </div>
      </div>

      <NavLinks>
        <Link to="About" smooth offset={-48}>
          <li>Sobre</li>
        </Link>
        <Link to="Projects" smooth offset={-48}>
          <li>Projetos</li>
        </Link>
        <Link to="Techs" smooth offset={-48}>
          <li>Tecnologias</li>
        </Link>
        <Link to="Contact" smooth offset={-48}>
          <li>Contato</li>
        </Link>
      </NavLinks>
    </Container>
  );
}
