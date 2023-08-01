import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import avatar from'@/assets/virgol.png'
const Comments = ({ comment, faName }) => {
    const { id, name, text, date } = comment;
    return (
        <div
            key={id}
            className="h-[25vh] flex flex-col justify-evenly p-4 bg-black-850 rounded-xl border border-gray-500 cursor-pointer"
        >
            <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center py-2'>
                    <FontAwesomeIcon icon={faUserCircle} className='text-gray-500 text-xl'/>
                    <p className="text-gray-400 pr-2">{name}</p>
                </div>
                <Image className="ml-4" src={avatar}/>
            </div>
            <div className='max-h-14 overflow-scroll'>
                <span className="text-gray-200 text-xs">{text}</span>
            </div>
            </div>
            <div className='text-gray-500 text-xs text-left  mt-8'>
            <p> {faName} :فیلم</p>
            <p className='mt-2'> {date} :تاریخ</p>
            </div>
        </div>
    );
}
export default Comments;