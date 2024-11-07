import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '@components/fallback/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    wrapperCss: { control: 'object' },
    circleCss: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
