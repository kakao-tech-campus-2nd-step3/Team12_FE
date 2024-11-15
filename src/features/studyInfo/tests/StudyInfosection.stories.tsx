import type { Meta, StoryObj } from '@storybook/react';
import StudyInfoSection from "@features/studyInfo/StudyInfoSection.tsx";
import {MemberInfoContextProvider} from "@providers/MemberInfoProvider.tsx";
import {BrowserRouter} from "react-router-dom";

const meta: Meta<typeof StudyInfoSection> = {
    title: 'features/StudyMain/StudyInfoSection',
    component: StudyInfoSection,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof StudyInfoSection>;

export const Default: Story = {
    render: () => (
        <BrowserRouter>
            <MemberInfoContextProvider>
                <StudyInfoSection/>
            </MemberInfoContextProvider>

        </BrowserRouter>
    ),
};
