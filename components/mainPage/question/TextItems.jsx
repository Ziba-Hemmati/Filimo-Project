import React from 'react';
import TextDetails from "@/components/mainPage/question/TextDetails";

const TextItem = ({ textObj, isOpen, onClick }) => {
    const { text, details } = textObj;

    const handleClick = () => {
        onClick(text);
    };

    return (
        <li onClick={handleClick} className="cursor-pointer list-none p-3 mb-2 bg-black-800 border border-gray-500 rounded-xl">
            <div className='flex justify-between'>
      <span className={`text-xs  font-bold ${isOpen ? 'text-orange-500' : 'text-gray-200'}`}>
        {text}
      </span>
                <span className='text-orange-500'>
        {isOpen ? 'x' : '+'}
      </span>
            </div>
            {isOpen && <TextDetails details={details} />}
        </li>
    );
};

export default TextItem;
