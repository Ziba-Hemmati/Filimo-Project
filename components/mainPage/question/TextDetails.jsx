import React from 'react';

const TextDetails = ({ details }) => {
    if (!details) {
        return null;
    }

    return (
        <div className=' p-2 mt-1 max-w-5xl leading-relaxed transition ease-in-out '>
            <p className='text-xs text-gray-200'>{details}</p>
        </div>
    );
};

export default TextDetails;
