import type { Meta, StoryObj } from '@storybook/react';
import Button from '@components/button';
import icon from '@assets/icons/eye.svg';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {

    buttonTheme: {
      control: 'radio',
      options: ['default', 'dark', 'light-outlined'],
    },
    children: {
      control: 'text',
      defaultValue: 'Button Text',
    },
    css: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    buttonTheme: 'default',
    children: 'Default Button',
  },
};

export const WithIcon: Story = {
  args: {
    buttonTheme: 'dark',
    children: 'Dark Button',
    icon,
  },
};

export const CustomStyled: Story = {
  args: {
    buttonTheme: 'default',
    children: 'Custom Styled Button',
    css: {
      backgroundColor: 'lightblue',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
  },
};
