import type { Meta, StoryObj } from '@storybook/react';
import NoticeDetailPage from "@features/notice/NoticeDetail.tsx";


const meta: Meta<typeof NoticeDetailPage> = {
    title: 'features/Notice/NoticeDetailPage',
    component: NoticeDetailPage,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NoticeDetailPage>;

export const Default: Story = {};