import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import avatar from'@/assets/virgol.png'
const Comments = ({ comment, faName }) => {
    const { id, name, text, date } = comment;
    return (
        <div
            key={id}
            className="h-[25vh] p-4 bg-black-850 rounded-xl border border-gray-500 cursor-pointer"
        >
            <div className='flex justify-between items-center'>
                <div className='flex items-center py-2'>
                    <FontAwesomeIcon icon={faUserCircle} className='text-gray-500 text-xl'/>
                    <p className="text-gray-400 pr-2">{name}</p>
                </div>
                <Image className="ml-4" src={avatar}/>
            </div>
            <div>
                <span className="text-gray-200 pb-6 text-xs">{text}</span>
            </div>
            <div className='text-gray-500 text-xs text-left  mt-8'>
            <p> {faName} :فیلم</p>
            <p className='mt-2'> {date} :تاریخ</p>
            </div>
        </div>
    );
}
export default Comments;