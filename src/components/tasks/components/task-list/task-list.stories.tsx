import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';
import { mockTaskListProps } from './task-list.mocks';
import { mockTasksData } from '../../constants/mockData';
import { tableCategories } from '../../constants/table';

const meta: Meta<typeof TaskList> = {
  title: 'tasks/List',
  component: TaskList,
  argTypes: {
    category: {
      options: tableCategories.map(({ value }) => value),
      control: { type: 'radio' },
    }
  },
  excludeStories: /.*MockedState$/
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MockedState = {
  tasks: mockTasksData
};

const Mockstore = ({ tasksState, children }: any) => { 
    console.log(tasksState);
    return (
  <Provider
    store={
      configureStore({
        reducer: createSlice({
          name: 'task',
          initialState: tasksState,
          reducers: {},
        }).reducer,
      })
    }
  >
    {children}
  </Provider>
);
}

export const Archived: Story = {
  decorators: [
    (story) => <Mockstore tasksState={MockedState}>{story()}</Mockstore>,
  ],
  args: {
    ...mockTaskListProps.base,
    category: 'Task'
  },
};