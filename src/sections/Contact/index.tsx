import { Container } from './styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import resume from '../../assets/CV - Julio Zambom.pdf';

export default function Contact() {
  return (
    <Container id="Contact">
      <h1 className="title">Contato</h1>
      <p>Sinta-se à vontade para entrar em contato comigo pelo meu e-mail.</p>
      <span>work.juliozambom@gmail.com</span>

      <a href={resume} target="_blank" className="resume">
        <h2>Currículo</h2>
      </a>

      <div className="links">
        <a href="">
          <AiFillGithub className="icon" />
        </a>

        <a href="/">
          <AiFillLinkedin className="icon" />
        </a>
      </div>
    </Container>
  );
}
