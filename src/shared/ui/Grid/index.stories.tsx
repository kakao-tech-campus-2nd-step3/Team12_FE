import type { Meta, StoryObj } from '@storybook/react';
import Grid from '.';

/* eslint-disable */

function ChildComponent() {
  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
    </>
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Layout/Grid',
  component: Grid,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NumberColumns: Story = {
  args: {
    gap: 0,
    columns: 3,
    children: <ChildComponent />,
  },
};

export const ResponsiveColumns: Story = {
  args: {
    gap: 0,
    columns: {
      initial: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
    children: <ChildComponent />,
  },
};
