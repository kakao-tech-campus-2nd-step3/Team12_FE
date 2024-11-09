import type { Meta, StoryObj } from '@storybook/react';
import Select from '@components/select';
import eye from '@assets/icons/eye.svg';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select label="label" icon={eye}>
      <option value="asdf">asdf</option>
      <option value="asdf">asdf</option>
      <option value="asdf">asdf</option>
      <option value="asdf">asdf</option>
    </Select>
  ),
};
