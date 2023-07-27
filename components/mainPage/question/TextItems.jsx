import React, { useState } from 'react';
import TextDetails from "@/components/mainPage/question/TextDetails";

const TextItem = ({ textObj }) => {
    const { text, details } = textObj;
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li onClick={handleClick} className="list-none p-3 mb-2 bg-black-800 border border-gray-500 rounded-xl">
            <div className='flex justify-between'>
                <span className={`cursor-pointer text-xs font-bold ${isOpen ? 'text-orange-500' : 'text-gray-200'}`}>
                    {text}
                </span>
                <span className={`text-orange-500 cursor-pointer text-xl ${isOpen ? 'text-orange-500' : 'text-gray-200'}`}>
                    {isOpen ? 'x' : '+'}
                </span>
            </div>
            {isOpen && <TextDetails details={details} />}
        </li>
    );
};

export default TextItem;
