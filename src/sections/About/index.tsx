import { Container, ReactIcon } from './styles';

export default function About() {
  return (
    <Container>
      <div className="about-text">
        <h1 className="title">Sobre mim</h1>
        { /* prettier-ignore */}
        <div className='short-bio'>
            <p> 
                Me apaixonei pela programação em 2021, quando comecei a estudar de
                verdade e a fundo os conceitos que aprendia no curso, daí para frente
                foi só evolução, <b>aplicação das teorias em projetos práticos</b>{' '}
                e muitas horas quebrando a cabeça para resolver aquele bugzinho chato 
                que sempre aparece.
            </p>
            <p>
                Estou apto a desenvolver aplicações tanto web utilizando o{' '}
                <b>React</b> quanto mobile utilizando o <b>React Native</b>, aplicando{' '}
                <b>conceitos de Clean Code</b> e também criando aplicações{' '}
                <b>performáticas e responsivas</b> para atender a todos os tipos de
                usuário final. 
            </p>
            <p>
                Pretendo me especializar ainda mais, me aprofundando na
                área de back-end para me tornar um <b>desenvolvedor completo</b> e
                poder <b>criar com maestria aplicações de ponta a ponta.</b>
            </p>
        </div>

        <div className="line" />

        <p>
          “Lembre-se que as pessoas podem tirar tudo de você, menos o seu
          conhecimento”
        </p>
        <b>- Albert Einstein</b>
      </div>

      <ReactIcon />
    </Container>
  );
}
