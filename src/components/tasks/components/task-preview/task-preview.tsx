import { useState } from 'react';
import { Modal } from '../../../common/modal/modal';
import { useSelector } from '../../../../store/store';
import { selectTasksState } from '../../../../store/taskSlice';

interface ITaskPreviewProps {
  taskId: string | null,
  onTasktAdd: (values: {}) => void,
  onTaskEdit: (id: string, values: {}) => void,
  onTaskPreviewToggle: (isShow: boolean) => void
}

const TaskPreview = ({ taskId = null, onTasktAdd, onTaskEdit, onTaskPreviewToggle }: ITaskPreviewProps) => {
  const tasks = useSelector(selectTasksState);
  const previewTask = taskId ? tasks.find((task) => task.id === taskId) : { name: '', content: '', category: '' };
  const initTaskState = {
    name: previewTask!.name,
    content: previewTask!.content,
    category: previewTask!.category,
  }

  const [taskValues, setTaskValues] = useState(initTaskState);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.target as HTMLInputElement;
      setTaskValues({
        ...taskValues,
        [name]: value,
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmit(true);
    if (Boolean(taskId)) {
      onTaskEdit(taskId as string, taskValues);
    } else {
      onTasktAdd(taskValues)
    }
    onTaskPreviewToggle(false);
    setIsSubmit(false);
  }

  return (
    <Modal title={taskId ? 'Edit Task' : 'Create Task'} onShow={onTaskPreviewToggle}>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='text'
            name='name'
            id='name'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-900 peer'
            placeholder=' '
            value={taskValues.name}
            onChange={handleChange}
            required
          />
          <label htmlFor='name' className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Name</label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='text'
            name='content'
            id='content'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-900 peer'
            placeholder=' '
            value={taskValues.content}
            onChange={handleChange}
            required
          />
          <label htmlFor='content' className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Content</label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <fieldset className='flex flex-col p-4 rounded border-2 border-slate-200'>
            <legend className='p-1 my-0 mx-auto rounded bg-slate-300 text-white'>Select a task category</legend>
            <div className='flex gap-2'>
              <input
                type='radio'
                id='category1'
                name='category'
                value='Task'
                checked={taskValues.category === 'Task'}
                onChange={handleChange}
                required
              />
              <label htmlFor='category1'>Task</label>
            </div>
            <div className='flex gap-2'>
              <input
                type='radio'
                id='category2'
                name='category'
                value='Random Thought'
                checked={taskValues.category === 'Random Thought'}
                onChange={handleChange} />
              <label htmlFor='category2'>Random Thought</label>
            </div>
            <div className='flex gap-2'>
              <input
                type='radio'
                id='category3'
                name='category'
                value='Idea'
                checked={taskValues.category === 'Idea'}
                onChange={handleChange}
              />
              <label htmlFor='category3'>Idea</label>
            </div>
            <div className='flex gap-2'>
              <input
                type='radio'
                id='category4'
                name='category'
                value='Quote'
                checked={taskValues.category === 'Quote'}
                onChange={handleChange}
              />
              <label htmlFor='category4'>Quote</label>
            </div>
          </fieldset>
        </div>
        <button
          type='submit'
          className='w-[50%] ml-auto text-white bg-slate-500 hover:bg-slate-300 hover:text-slate-950 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center'
          disabled={isSubmit}
        >
          {taskId ? 'Save' : 'Submit'}
        </button>
      </form>
    </Modal>
  )
}

export { TaskPreview };