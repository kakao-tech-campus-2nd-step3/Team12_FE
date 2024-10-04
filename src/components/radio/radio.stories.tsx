import type { Meta, StoryObj } from '@storybook/react';
import Radio from '@components/radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    css: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
  },
};

export const Radios: Story = {
  render: () => (
    <form>
      <Radio name="radio" />
      <Radio name="radio" />
      <Radio name="radio" />
      <Radio name="radio" />
    </form>
  ),
};
