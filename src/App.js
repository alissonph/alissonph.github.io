import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Page from './components/Page';
import { light, dark } from './styles/Theme';
import { getPreferredLanguage } from './utils/utils';

function App() {
  const [theme, setTheme] = useState(dark);
  const [language, setLanguage] = useState(getPreferredLanguage());

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Page
        toggleTheme={toggleTheme}
        setLanguage={setLanguage}
        language={language}
      />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
