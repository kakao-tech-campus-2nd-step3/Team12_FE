import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '@components/textarea/index';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    css: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
  },
};
