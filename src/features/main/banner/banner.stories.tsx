import type { Meta, StoryObj } from '@storybook/react';
import Banner from "@features/main/banner/index.tsx";

const meta: Meta<typeof Banner> = {
    title: 'Components/Banner',
    component: Banner,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {};
