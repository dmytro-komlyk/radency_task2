import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import { TaskPreview } from './task-preview';
import { mockTaskPreviewProps } from './task-preview.mocks';
import { mockTasksData } from '../../constants/mockData';

const meta: Meta<typeof TaskPreview> = {
  title: 'tasks/Preview',
  component: TaskPreview,
  argTypes: {
    taskId: {
      options: [null, ...mockTasksData.filter((task) => !task.archived).map((task) => task.id)],
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

const Mockstore = ({ tasksState, children }: any) => (
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

export const Create: Story = {
  decorators: [
    (story) => <Mockstore tasksState={MockedState}>{story()}</Mockstore>
  ],
  args: {
    ...mockTaskPreviewProps.base,
  },
};

export const Edit: Story = {
  decorators: [
    (story) => <Mockstore tasksState={MockedState}>{story()}</Mockstore>
  ],
  args: {
    ...mockTaskPreviewProps.base,
    taskId: '1'
  },
};