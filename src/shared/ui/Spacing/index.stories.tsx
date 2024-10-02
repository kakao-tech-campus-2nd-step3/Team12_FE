import type { Meta, StoryObj } from '@storybook/react';
import Spacing from '.';

/* eslint-disable */

const meta = {
  title: 'Components/Spacing',
  component: Spacing,
  argTypes: {
    height: {
      control: {
        type: 'object',
      },
    },
    backgroundColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 16,
    backgroundColor: 'inherit',
  },
};

export const ResponsiveHeight: Story = {
  args: {
    height: {
      initial: 16,
      sm: 32,
      md: 48,
      lg: 64,
    },
    backgroundColor: 'inherit',
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    height: 16,
    backgroundColor: 'red',
  },
};
