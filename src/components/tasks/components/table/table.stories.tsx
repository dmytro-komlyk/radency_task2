import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';
import { mockTasksData, mockStatsData } from '../../constants/mockData';
import { tableHeaders } from '../../constants/table';
import { mockTableProps } from './table.mocks';

const meta: Meta<typeof Table> = {
  title: 'tasks/Table',
  component: Table,
  argTypes: {
    isAction: {
      table: {
        disable: true
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ActiveTable: Story = {
  args: {
    ...mockTableProps.base,
    headers: tableHeaders.active,
    items: mockTasksData.filter((task) => !task.archived)
  },
};

export const StatsTable: Story = {
  args: {
    ...mockTableProps.base,
    isAction: false,
    items: mockStatsData,
    headers: tableHeaders.stats,
  },
};