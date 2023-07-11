import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { UIProvider } from '../context/ui';
import { darkTheme } from '../themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
