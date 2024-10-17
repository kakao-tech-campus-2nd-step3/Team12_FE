import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import defaultTheme from '@styles/theme';

// TODO: QueryClientProvider 등 기타 필수적인 Provider 추가
// eslint-disable-next-line import/prefer-default-export
export function renderWithProviders(children: ReactNode) {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    </MemoryRouter>,
  );
}
