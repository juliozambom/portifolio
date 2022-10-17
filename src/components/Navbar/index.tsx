import { useEffect, useState } from 'react';
import { Container, NavLinks, Link } from './styles';

export default function Navbar() {
  const phrases = [
    'div',
    'react',
    'reactnative',
    'typescript',
    'javascript',
    'juliozambom',
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      handleNextPhrase();
    }, 6000);
  }, [currentPhrase]);

  function handleNextPhrase() {
    if (currentPhrase === phrases.length - 1) {
      setCurrentPhrase(0);
    } else {
      setCurrentPhrase(currentPhrase + 1);
    }
  }

  return (
    <Container>
      <div className="left">
        <h1 className="title">{`</${phrases[currentPhrase]}>`}</h1>
      </div>
      <NavLinks>
        <Link href="">Sobre</Link>
        <Link href="">Projetos</Link>
        <Link href="">Tecnologias</Link>
        <Link href="">Contato</Link>
      </NavLinks>
    </Container>
  );
}
