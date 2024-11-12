import type { Meta, StoryObj } from '@storybook/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import AssignEdit from "@features/assignment/AssignEdit.tsx";


const meta: Meta<typeof AssignEdit> = {
    title: 'features/Assignment/AssignEdit',
    component: AssignEdit,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof AssignEdit>;

export const Default: Story = {};
