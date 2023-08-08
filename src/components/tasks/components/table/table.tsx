import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { tableCategories } from '../../constants/table';
import { getParseDate, getLocaleDateFormat } from '../../../../helpers/date-format-helper';
import { faTrash, faBoxArchive, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ITask, ITaskInfo } from '../../../../store/taskSlice';

interface IActions {
  isAction: boolean,
  onTaskPreviewToogle?(status: boolean, id: any): void;
  onTaskArchive?(id: any): void;
  onTaskRemove?(id: any): void;
  onTaskListToogle?(status: boolean, category?: null): void,
}

interface IHeadTable {  
  headers: string[],
  isAction: boolean
}

interface IBodyTable extends IActions {
  body: ITask[] | ITaskInfo[],
}

export interface ITable extends IActions {
  headers: string[],
  items: ITask[] | ITaskInfo[],
  className: string,
}

const HeadTable = (props: IHeadTable) => (
  <thead className='flex w-full bg-slate-600 text-white'>
    <tr className='flex items-center gap-3 w-full p-4'>
      {props.headers.map((header: string, idx: number) => (<th key={idx} className={`w-1/4 capitalize`}>{ header }</th>))}
      {props.isAction &&
        <th className='w-1/4 border-white'>
          <div className='flex justify-end gap-2'>
            <FontAwesomeIcon icon={faBoxArchive as IconProp} />
            <FontAwesomeIcon icon={faTrash as IconProp} />
          </div>
        </th>}
    </tr>
  </thead>
);

const BodyTable = (props: IBodyTable) => (
  <tbody className='flex flex-col items-center justify-between overflow-y-scroll w-full max-h-96'>
    {props.body.map((task: any) => {
      const categoryIcon = tableCategories.find((item) => item.value === task.category);
      const convertedCreatedDate = props.isAction && getLocaleDateFormat(task.created, { month: 'long', day: 'numeric', year: 'numeric' });
      const dates = props.isAction && getParseDate(task.content);
  
      return (
      <tr key={task.id} className='flex gap-3 items-center mt-2 w-full p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer' onClick={() => (!props.isAction && props.onTaskListToogle) && props.onTaskListToogle(true, task.category)}>
        <td className='w-1/4'>
          <div className='flex items-center gap-3'>
            <FontAwesomeIcon className='w-4 h-4' icon={categoryIcon?.icon as IconProp} />
            <span className='truncate'>{ props.isAction ? task.name: task.category }</span>
          </div>
        </td>
        { props.isAction ? (
          <>
            <td className='w-1/4 truncate text-center'>{ convertedCreatedDate }</td>
            <td className='w-1/4 truncate text-center'>{ task.category }</td>
            <td className='w-1/4 truncate text-center'>{ task.content }</td>
            <td className='w-1/4 truncate text-center'>
              { dates && (
                <div className='flex flex-col gap-1'>{dates.map((date: string, idx: number) => <span key={idx} className='bg-slate-300 rounded'>{date}</span>)}</div>
              )}
            </td>
            <td className='w-1/4 truncate'>
              <div className='flex justify-end gap-2'>
                <button className='py-0.5 px-1.5 rounded-full hover:bg-slate-500' onClick={() => props.onTaskPreviewToogle && props.onTaskPreviewToogle(true, task.id)}><FontAwesomeIcon icon={faPenToSquare as IconProp} /></button>
                <button className='py-0.5 px-1.5 rounded-full hover:bg-slate-500' onClick={() => props.onTaskArchive && props.onTaskArchive(task.id)}><FontAwesomeIcon icon={faBoxArchive as IconProp} /></button>
                <button className='py-0.5 px-1.5 rounded-full hover:bg-slate-500' onClick={() => props.onTaskRemove && props.onTaskRemove(task.id)}><FontAwesomeIcon icon={faTrash as IconProp} /></button>
              </div>
            </td>
          </>
        ) : (
          <>
            <td className='w-1/4 truncate text-center'>{ task.active }</td>
            <td className='w-1/4 truncate text-center'>{ task.archived }</td>
          </>
        )
        }
      </tr>
      )})}
  </tbody>
)

const Table = ({ headers, items, className, isAction, onTaskPreviewToogle, onTaskListToogle, onTaskRemove, onTaskArchive }: ITable) => {
  return (
    <div className={`${className} rounded-xl`}>
      <table className='table-fixed w-full border-collapse rounded-xl overflow-hidden'>
        <HeadTable headers={headers} isAction={isAction} />
        <BodyTable
          body={items}
          isAction={isAction}
          onTaskPreviewToogle={onTaskPreviewToogle}
          onTaskRemove={onTaskRemove}
          onTaskArchive={onTaskArchive}
          onTaskListToogle={onTaskListToogle}
        />
      </table>
    </div>
  )
}

export { Table }