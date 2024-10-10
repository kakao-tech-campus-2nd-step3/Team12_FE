import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BrowserRouterProvider from '@providers/BrowserRouterProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';
import defaultTheme from '@styles/theme';
import 'reset-css/reset.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouterProvider />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
