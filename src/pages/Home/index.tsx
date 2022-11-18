import { Container } from './styles';
import Header from '../../sections/Header';
import About from '../../sections/About';
import Projects from '../../sections/Projects';
import Techs from '../../sections/Techs';
import Contact from '../../sections/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <About />
        <Projects />
        <Techs />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
