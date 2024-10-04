import type { Meta, StoryObj } from '@storybook/react';
import Input from '@components/input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    css: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    enableToggleShow: true,
    type: 'password',
  },
};

export const InputWithLabel: Story = {
  args: {
    type: 'text',
    label: 'label',
  },
};

export const PasswordWithLabel: Story = {
  args: {
    enableToggleShow: true,
    type: 'password',
    label: '비밀번호',
  },
};

export const DisabledInput: Story = {
  args: {
    disabled: true,
  },
};
