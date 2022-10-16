import { Container, Title, NavLinks, Link } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Title>{'</>'}</Title>
      <NavLinks>
        <Link href="">Sobre</Link>
        <Link href="">Projetos</Link>
        <Link href="">Tecnologias</Link>
        <Link href="">Contato</Link>
      </NavLinks>
    </Container>
  );
}
