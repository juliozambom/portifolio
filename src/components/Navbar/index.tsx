import { useEffect, useState } from 'react';
import { Container, NavLinks, Link } from './styles';

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
            <div className="dynamic-text">
              <span>{`</${phrase}>`}</span>
            </div>
          ))}
        </div>
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
