// @ts-nocheck
import type { Preview } from "@storybook/react";
import {ThemeProvider} from '@emotion/react';
import defaultTheme from '../src/styles/theme';
import 'reset-css/reset.css';
import '../public/index.css';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  ],
};

export default preview;
