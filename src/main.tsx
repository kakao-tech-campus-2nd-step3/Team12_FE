import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PassportProvider from '@providers/PassportProvider';
import BrowserRouterProvider from '@providers/BrowserRouterProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PassportProvider>
        <BrowserRouterProvider />
      </PassportProvider>
    </QueryClientProvider>
  </StrictMode>,
);
