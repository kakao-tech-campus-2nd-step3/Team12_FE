import type { Meta, StoryObj } from '@storybook/react';
import MemberListSection from "@features/studyInfo/MemberListSection.tsx";

const meta: Meta<typeof MemberListSection> = {
    title: 'features/StudyMain/MemberListSection',
    component: MemberListSection,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof MemberListSection>;

export const Default: Story = {};
