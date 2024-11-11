import type { Meta, StoryObj } from '@storybook/react';
import MemberInfoSection from "@features/memberInfo/MemberInfoSection.tsx";

const meta: Meta<typeof MemberInfoSection> = {
    title: 'features/MemberInfo/MemberInfoMain',
    component: MemberInfoSection,
    parameters: {
        paddings: {
            default: '1rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof MemberInfoSection>;

export const Default: Story = {};
