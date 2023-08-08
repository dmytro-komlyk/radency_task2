import { ITaskListProps } from './task-list';

const base: ITaskListProps = {
  category: null,
  onTaskListToogle: () => {},
  onTaskUnarchive: () => {}
};

export const mockTaskListProps = {
  base,
};