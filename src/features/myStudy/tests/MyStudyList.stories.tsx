import type { Meta, StoryObj } from '@storybook/react';
import MyStudyList from "@features/myStudy/MyStudyList.tsx";


const meta: Meta<typeof MyStudyList> = {
    title: 'features/MyStudy/MyStudyList',
    component: MyStudyList,
    parameters: {
        paddings: {
            default: '2rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof MyStudyList>;

export const Default: Story = {};
