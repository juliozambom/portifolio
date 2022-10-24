import { GlobalStyle } from '../styles/global';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import Navbar from './Navbar';
import Header from '../sections/Header';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Techs from '../sections/Techs';
import Contact from '../sections/Contact';
import Footer from './Footer';
import Home from '../pages/Home';
import AllProjects from '../pages/AllProjects';

export default function App() {
  const colorMode = 'light';
  return (
    <ThemeProvider theme={theme[colorMode]}>
      <GlobalStyle />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}
