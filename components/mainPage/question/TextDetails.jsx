import './link.css'
import React from 'react';

const TextDetails = ({ details }) => {
    if (!details) {
        return null;
    }

    let updatedDetails = details.replace(
        /دانلود از طریق سایت و دانلود از طریق اپلیکیشن/g,
        '<a class="link" href="#">دانلود از طریق سایت و دانلود از طریق اپلیکیشن</a>',
    );
    updatedDetails = updatedDetails.replace(
        /دانلود مستقیم نرم‌افزار iOS/g,
        '<a href="#" class="link">(دانلود مستقیم نرم‌افزار iOS)</a>',
    );
    updatedDetails = updatedDetails.replace(
        /دانلود مستقیم نرم‌افزار اندروید/g,
        '<a class="link" href="#">(دانلود مستقیم نرم‌افزار اندروید)</a>',
    );
    return (
        <div className='p-2 mt-1 max-w-5xl leading-relaxed'>
            <p className='text-xs text-gray-300' dangerouslySetInnerHTML={{ __html: updatedDetails }}  />
        </div>
    );
};

export default TextDetails;
