import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { mockButtonProps } from './button.mocks';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...mockButtonProps.base,
    label: 'Create Note',
    className: 'ml-auto p-2 rounded bg-slate-600 text-white hover:bg-slate-200 hover:text-slate-900'
  },
};