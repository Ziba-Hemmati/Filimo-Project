import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import avatar from '@/assets/images/virgol.png'
const Comments = ({ comment, faName }) => {
    const { id, name, text, date } = comment;
    return (
        <div
            key={id}
            className=" px-5 py-6 bg-black-850 rounded-xl border border-gray-600 cursor-pointer"
        >
            <div className='flex justify-between items-center'>
                <div className='flex items-center pb-1'>
                    <FontAwesomeIcon icon={faUserCircle} className='text-gray-500 text-2xl'/>
                    <p className="text-gray-400 pr-2">{name}</p>
                </div>
                <Image src={avatar} alt={"avatar"} className="mb-2"/>
            </div>
            <div className='h-14 overflow-scroll'>
                <span className="text-gray-200 text-[12px]">{text}</span>
            </div>
            <div className='text-gray-500 text-xs text-left pt-2'>
            <p> {faName} :فیلم</p>
            <p className='mt-2'> {date} :تاریخ</p>
            </div>
        </div>
    );
}
export default Comments;