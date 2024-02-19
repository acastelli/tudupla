import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from 'locales';
import theme from 'muiTheme';
import MainRouter from 'features/common/components/MainRouter';
import { ThemeProvider } from '@mui/material';
import { ResolutionProvider } from 'features/common/hooks/useResolution';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ResolutionProvider>
            <MainRouter />
          </ResolutionProvider>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
