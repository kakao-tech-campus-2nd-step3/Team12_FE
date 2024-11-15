import type { Meta, StoryObj } from '@storybook/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import AssignEditPage from "@pages/assignment/AssignEditPage.tsx";


const meta: Meta<typeof AssignEditPage> = {
    title: 'features/Assignment/AssignEditPage',
    component: AssignEditPage,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof AssignEditPage>;

export const Default: Story = {};
