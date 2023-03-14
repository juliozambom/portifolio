import { Container } from './styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import resume from '../../assets/CV - Julio Zambom.pdf';

export default function Contact() {
  return (
    <Container id="Contact">
      <h1 className="title">Contato</h1>
      <p>Sinta-se à vontade para entrar em contato comigo pelo meu e-mail.</p>
      <span>contato.juliozambom@gmail.com</span>

      <a href={resume} target="_blank" className="resume">
        <h2>Baixar currículo</h2>
      </a>

      <div className="links">
        <a target="_blank" href="https://github.com/juliozambom">
          <AiFillGithub className="icon" />
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/julio-zambom-1562aa216/">
          <AiFillLinkedin className="icon" />
        </a>
      </div>
    </Container>
  );
}
