import type { Meta, StoryObj } from '@storybook/react';
import Tag from '@components/tag/index';
import icon from '@assets/icons/tag.svg';
import { css } from '@emotion/react';
import colorTheme from '@styles/colors';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'label',
    icon,
  },
};

export const EnableClose: Story = {
  args: {
    children: 'label',
    icon,
    enableClose: true,
  },
};

export const EnableCloseStyled: Story = {
  args: {
    children: 'label',
    icon,
    enableClose: true,
    css: css`
        background-color: ${colorTheme.primary.passive};
        border: none;
      `,
    onClose: () => { console.log('close'); },
  },
};

export const EnableClosePrimary: Story = {
  args: {
    children: 'label',
    icon,
    enableClose: true,
    variant: 'primary',
    onClose: () => { console.log('close'); },
  },
};
