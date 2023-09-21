import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import Page from './components/Page';
import Privacy from './components/Privacy';
import { light, dark } from './styles/Theme';
import { getPreferredLanguage, isDarkMode } from './utils/utils';

function App() {
  const [theme, setTheme] = useState(isDarkMode() ? dark : light);
  const [language, setLanguage] = useState(getPreferredLanguage());

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ThemeProvider theme={theme}>
          <Page
            toggleTheme={toggleTheme}
            setLanguage={setLanguage}
            language={language}
          />
          <GlobalStyles />
        </ThemeProvider>
      ),
    },
    {
      path: '/privacy',
      element: <Privacy />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
