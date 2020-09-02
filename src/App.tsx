import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import UsePersistedState from './utils/usePreference';
import Header from './shared/Header';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = UsePersistedState('theme', dark);
  const { title } = theme;

  const toggleTheme = (): void => {
    setTheme(title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
