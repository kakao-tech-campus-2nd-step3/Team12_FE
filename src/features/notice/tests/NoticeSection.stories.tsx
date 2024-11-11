import type { Meta, StoryObj } from '@storybook/react';
import NoticeList from "@features/notice/NoticeList.tsx";


const meta: Meta<typeof NoticeList> = {
    title: 'features/Notice/NoticeList',
    component: NoticeList,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NoticeList>;

export const Default: Story = {};
