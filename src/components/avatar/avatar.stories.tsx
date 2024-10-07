import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@components/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    css: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarImage: Story = {
  args: {
    src: 'https://picsum.photos/200',
  },
};

export const DefaultAvatar: Story = {
  args: {
  },
};
