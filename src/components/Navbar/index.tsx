import { useState, useLayoutEffect } from 'react';
import { Link } from 'react-scroll';
import { RiMenu3Line } from 'react-icons/ri';

import { Container, NavLinks } from './styles';
import MobileMenu from '../MobileMenu';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isNavLinksActive, setIsNavLinksActive] = useState(true);

  const navigate = useNavigate();

  const { pathname } = useLocation();

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
      <div className="static-container" onClick={() => navigate('/')}>
        <div className="dynamic-text-list">
          {phrases.map((phrase) => (
            <div key={phrase} className="dynamic-text">
              <span>{`</${phrase}>`}</span>
            </div>
          ))}
        </div>
      </div>

      {pathname !== '/projects' ? (
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

            <RiMenu3Line
              className="mobile-menu"
              onClick={() => setIsMobileMenuActive(true)}
            />
          </NavLinks>
      ) : (
          <NavLinks isProjectsScreen>
              <li onClick={() => navigate('/')}>Início</li>            
          </NavLinks>
      )}

      <MobileMenu
        isMenuActive={isMobileMenuActive}
        setIsMenuActive={setIsMobileMenuActive}
      />
    </Container>
  );
}
