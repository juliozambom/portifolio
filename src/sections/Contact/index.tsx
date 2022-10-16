import { Container } from './styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Contact() {
  return (
    <Container>
      <h1 className="title">Contato</h1>
      <p>Sinta-se à vontade para entrar em contato comigo pelo meu e-mail.</p>
      <span>work.juliozambom@gmail.com</span>
      <div className="links">
        <a href="">
          <AiFillGithub className="icon" />
        </a>

        <a href="">
          <AiFillLinkedin className="icon" />
        </a>
      </div>
    </Container>
  );
}
