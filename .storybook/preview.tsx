import type { Preview } from "@storybook/react";
import PassportProvider from '../src/providers/PassportProvider';

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
      <PassportProvider>
        <Story />
      </PassportProvider>
    )
  ],
};

export default preview;
