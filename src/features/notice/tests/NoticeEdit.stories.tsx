import type { Meta, StoryObj } from '@storybook/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import NoticeEdit from "@pages/notice/NoticeEditPage";


const meta: Meta<typeof NoticeEdit> = {
    title: 'features/Notice/NoticeEdit',
    component: NoticeEdit,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NoticeEdit>;

export const Default: Story = {};
