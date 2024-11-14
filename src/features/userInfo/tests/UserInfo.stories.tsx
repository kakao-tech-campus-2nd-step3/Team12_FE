import type { Meta, StoryObj } from '@storybook/react';
import {MemberInfoContextProvider} from "@providers/MemberInfoProvider.tsx";
import UserInfoSection from "@features/userInfo/UserInfoSection.tsx";

const meta: Meta<typeof UserInfoSection> = {
    title: 'features/UserInfo/UserInfoSection',
    component: UserInfoSection,
    parameters: {
        paddings: {
            default: '1rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof UserInfoSection>;

export const Default: Story = {
    render: () => (
            <MemberInfoContextProvider>
                <UserInfoSection/>
            </MemberInfoContextProvider>
    ),
};
