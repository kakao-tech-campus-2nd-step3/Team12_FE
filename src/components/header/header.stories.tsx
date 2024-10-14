import { StoryFn } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import defaultTheme from '../../styles/theme';
import Header from "@components/header/index.tsx"; // 경로는 프로젝트 구조에 맞게 조정

export default {
    title: 'Components/Header',
    component: Header,
    decorators: [
        (Story: StoryFn) => (
            <ThemeProvider theme={defaultTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export const Default = () => <Header />;
