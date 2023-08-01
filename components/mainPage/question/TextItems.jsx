import React, { useState } from 'react';
import TextDetails from './TextDetails';

const TextItem = ({ textObj }) => {
  const { text, details } = textObj;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="list-none p-3 mb-2 bg-black-800 border border-gray-500 rounded-xl transition duration-700 ease-in-out">
      <div className="flex justify-between cursor-pointer transition duration-1000 ease-in" onClick={handleClick}>
        <span className={`text-xs font-bold ${isOpen ? 'text-orange-500' : 'text-gray-200'}`}>
          {text}
        </span>
        <span className='text-orange-500 text-xl'>
          {isOpen ? 'x' : '+'}
        </span>
      </div>
      <div className={`transition duration-700 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0 transition duration-1000 ease-in '} overflow-hidden transition-all`}>
        <TextDetails details={details}/>
      </div>
    </li>
  );
};

export default TextItem;
