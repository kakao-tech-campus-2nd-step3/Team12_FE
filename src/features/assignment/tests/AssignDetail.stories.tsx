import type { Meta, StoryObj } from '@storybook/react';
import AssignDetailPage from "@pages/assignment/AssignDetailPage.tsx";

const meta: Meta<typeof AssignDetailPage> = {
    title: 'features/Assignment/AssignDetailPage',
    component: AssignDetailPage,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof AssignDetailPage>;

export const Default: Story = {};
