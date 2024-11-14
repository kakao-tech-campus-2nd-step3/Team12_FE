import type { Meta, StoryObj } from '@storybook/react';
import AssignSubmittedList from "@features/assignment/AssignSubmittedList.tsx";


const meta: Meta<typeof AssignSubmittedList> = {
    title: 'features/Assignment/AssignSubmittedList',
    component: AssignSubmittedList,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof AssignSubmittedList>;

export const Default: Story = {};
