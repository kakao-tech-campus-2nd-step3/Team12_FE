import type { Meta, StoryObj } from '@storybook/react';
import Footer from "@components/footer/index.tsx";

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
