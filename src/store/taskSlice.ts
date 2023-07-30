import { AppState } from './store';
import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';

const mockTasks = [
  { id: uniqueId(), name: 'Shopping list', archived: false, created: Date.now(), category: 'Task', content: 'Tomatoes, bread', dates: [] },
  { id: uniqueId(), name: 'New Feature', archived: false, created: Date.now(), category: 'Idea', content: 'Implement new feature', dates: ['2021-05-03', '2021-05-05'] },
  { id: uniqueId(), name: 'William Gaddis', archived: false, created: Date.now(), category: 'Quote', content: 'Power doesnt content', dates: [] },
]

export interface ITask {
  id: string,
  name: string,
  archived: boolean,
  created: number,
  category: string,
  content: string,
  dates: string[]
}

export interface ITaskInfo {
  category: string,
  archived: number,
  active: number
}

export interface ITaskState {
  tasks: Array<ITask>;
}

const initialState: ITaskState = {
  tasks: [...mockTasks],
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
      addTask: (state, action) => {
        const { payload: { date, ...restData } } = action;
        const newTask = {
          id: uniqueId(),
          archived: false,
          created: Date.now(),
          dates: [date],
          ...restData
        };
        state.tasks.push(newTask);
      },
      editTask: (state, action) => {
        const { payload: { id, data } } = action;
        const { date, ...restData } = data;
        state.tasks = state.tasks.map((task) => task.id === id ? { ...task, ...restData,  dates: Boolean(date) ? [ date, ...task.dates] : task.dates } : task )
      },
      removeTask: (state, action) => {
        state.tasks = state.tasks.filter((task => task.id !== action.payload.id));
      },
      archiveTask: (state, action) => {
        state.tasks = state.tasks.map((task) => task.id === action.payload.id ? { ...task, archived: true } : task)
      },
      unarchiveTask: (state, action) => {
        state.tasks = state.tasks.map((task) => task.id === action.payload.id ? { ...task, archived: false } : task)
      }
    },
    
});

export const { addTask, editTask, removeTask, archiveTask, unarchiveTask } = taskSlice.actions

export const selectTasksState = (state: AppState) => state.tasks;

export { taskSlice };