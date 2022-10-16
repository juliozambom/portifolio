import { GlobalStyle } from "../styles/global";
import Navbar from "./Navbar";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export default function App() {
  const colorMode = "light";
  return (
    <ThemeProvider theme={theme[colorMode]}>
      <GlobalStyle />
      <Navbar />
      <Header />
    </ThemeProvider>
  );
}
