import type { Meta, StoryObj } from '@storybook/react';
import StudyInfoSection from "@features/modal/studyMain/StudyInfoSection.tsx";

const meta: Meta<typeof StudyInfoSection> = {
    title: 'features/StudyMain/StudyInfoSection',
    component: StudyInfoSection,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof StudyInfoSection>;

export const Default: Story = {};
