import type { Meta, StoryObj } from '@storybook/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import AssignCreation from "@features/assignment/AssignCreation.tsx";


const meta: Meta<typeof AssignCreation> = {
    title: 'features/Assignment/AssignCreation',
    component: AssignCreation,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof AssignCreation>;

export const Default: Story = {};
