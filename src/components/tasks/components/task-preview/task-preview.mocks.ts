import { ITaskPreviewProps } from './task-preview';

const base: ITaskPreviewProps = {
  taskId: null,
  onTasktAdd: () => {},
  onTaskEdit: () => {},
  onTaskPreviewToggle: () => {}
};

export const mockTaskPreviewProps = {
  base,
};