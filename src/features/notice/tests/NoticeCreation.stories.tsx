import type { Meta, StoryObj } from '@storybook/react';
import NoticeCreation from "@features/notice/NoticeCreation.tsx";
import '@toast-ui/editor/dist/toastui-editor.css';
import {Toaster} from "react-hot-toast";


const meta: Meta<typeof NoticeCreation> = {
    title: 'features/Notice/NoticeCreation',
    component: NoticeCreation,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NoticeCreation>;

export const Default: Story = {
    render: () => (
        <>
            <NoticeCreation studyId={11}/>
            <Toaster /> {/* Toaster 추가 */}
        </>
    ),
};
