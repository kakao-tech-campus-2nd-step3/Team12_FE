import type { Meta, StoryObj } from '@storybook/react';
import AssignList from "@features/assignment/AssignList.tsx";


const meta: Meta<typeof AssignList> = {
    title: 'features/Assignment/AssignList',
    component: AssignList,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof AssignList>;

export const Default: Story = {};
