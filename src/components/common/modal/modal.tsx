import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ title, onShow, children }: any) => (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
        <div className='first-line:relative top-20 w-96 mx-auto flex flex-col border-0 rounded-lg shadow-lg bg-white outline-none focus:outline-none'>
            <div className='flex p-3'>
                <button className="ml-auto" onClick={() => onShow(false)}>
                    <FontAwesomeIcon icon={faXmark as IconProp} />
                </button>
            </div>
            <div className='text-2xl text-center'>{ title }</div>
            <div className='relative p-6 flex-auto'>
                { children }
            </div>
        </div>
    </div>
)

export { Modal};