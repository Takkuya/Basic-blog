import { ThemeProvider, DefaultTheme } from "styled-components";
import { Header } from "./components/Header";
import usePersistedState from "./hooks/usePersistedState";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { ReactComponent as SVGIcon } from "./assets/Progressive_App.svg";

import GlobalStyle from "./styles/global";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="App">
        <Header toggleTheme={toggleTheme} />
        Hello World
        <SVGIcon />
      </div>
    </ThemeProvider>
  );
}

export default App;
