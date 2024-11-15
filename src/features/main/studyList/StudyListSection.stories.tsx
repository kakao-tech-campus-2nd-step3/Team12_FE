import type { Meta, StoryObj } from '@storybook/react';
import StudyListSection from '@features/main/studyList/StudyListSection';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import {MemoryRouter} from "react-router-dom";

const queryClient = new QueryClient();

const meta: Meta<typeof StudyListSection> = {
  title: 'Features/Main/StudyListSection',
  component: StudyListSection,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof StudyListSection>;

export const Default: Story = {
  render: () => (
      <QueryClientProvider client={queryClient}>
          <MemoryRouter>
              <StudyListSection />
              <Toaster />
          </MemoryRouter>
      </QueryClientProvider>
  ),
};
