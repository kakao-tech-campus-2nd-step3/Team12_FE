import type { Meta, StoryObj } from '@storybook/react';
import Button from '@components/button';
import icon from '@assets/icons/eye.svg';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {

    variant: {
      control: 'radio',
      options: ['default', 'dark', 'primary'],
    },
    disabled: {
      control: 'boolean',
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
    variant: 'default',
    children: 'Default Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'dark',
    children: 'Dark Button',
    icon,
  },
};

export const CustomStyled: Story = {
  args: {
    variant: 'default',
    children: 'Custom Styled Button',
    css: {
      "backgroundColor": "lightblue",
      "padding": "10px 20px",
      "borderRadius": "5px",
      "cursor": "pointer"
    },
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Dark Button",
    icon: "/src/assets/icons/eye.svg",
    disabled: true
  }
};
