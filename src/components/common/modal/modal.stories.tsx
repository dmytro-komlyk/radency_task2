import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'common/Modal',
  component: Modal,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};