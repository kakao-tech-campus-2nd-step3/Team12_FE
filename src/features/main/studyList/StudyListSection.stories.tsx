import type { Meta, StoryObj } from '@storybook/react';
import StudyListSection from '@features/main/studyList/StudyListSection';

const meta: Meta<typeof StudyListSection> = {
  title: 'Features/Main/StudyListSection',
  component: StudyListSection,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof StudyListSection>;

export const Default: Story = {
};
