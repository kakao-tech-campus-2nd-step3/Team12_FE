import type { Meta, StoryObj } from '@storybook/react';
import UserInfoEditSection from "@features/userInfo/UserInfoEditSection.tsx";
import { BrowserRouter } from 'react-router-dom';
import {MemberInfoContextProvider} from "@providers/MemberInfoProvider.tsx"; // BrowserRouter 임포트

const meta: Meta<typeof UserInfoEditSection> = {
    title: 'features/UserInfo/UserInfoEditSection',
    component: UserInfoEditSection,
    parameters: {
        paddings: {
            default: '1rem',
        },
    },
};

export default meta;
type Story = StoryObj<typeof UserInfoEditSection>;

// Storybook에서 Router 설정
export const Default: Story = {
    render: () => (
        <BrowserRouter> {/* UserInfoEditSection을 BrowserRouter로 감쌈 */}
            <MemberInfoContextProvider>
                <UserInfoEditSection/>
            </MemberInfoContextProvider>

        </BrowserRouter>
    ),
};
