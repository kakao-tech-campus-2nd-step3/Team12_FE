import type { Meta, StoryObj } from '@storybook/react';
import StudyEditSection from "@features/myStudy/StudyEditSection.tsx";


const meta: Meta<typeof StudyEditSection> = {
    title: 'features/MyStudy/StudyEditSection',
    component: StudyEditSection,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof StudyEditSection>;

export const Default: Story = {};
