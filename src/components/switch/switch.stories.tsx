import type { Meta, StoryObj } from '@storybook/react';
import Switch from '@components/switch';
import { css } from '@emotion/react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    wrapperCss: { control: 'object' },
    circleCss: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    onCheckedChange: ({ checked }) => console.log('checked', checked),
  },
};

export const CustomStyled: Story = {
  args: {
    wrapperCss: (
      css`
        .switch-checked + & {
          background-color: #e8baba;
        }
      `
    ),
    checked: true,
    onCheckedChange: ({ checked }) => console.log('checked', checked),
  },
};
