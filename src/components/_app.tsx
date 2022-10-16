import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import Navbar from './Navbar';
import Header from '../sections/Header';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Techs from '../sections/Techs';
import Contact from '../sections/Contact';

export default function App() {
  const colorMode = 'light';
  return (
    <ThemeProvider theme={theme[colorMode]}>
      <GlobalStyle />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Techs />
      <Contact />
    </ThemeProvider>
  );
}
