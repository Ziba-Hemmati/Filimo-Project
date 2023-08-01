'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Button = () => {
    const [activeLink, setActiveLink] = useState({
        bookmark: false,
        rated: false,
    });

    useEffect(() => {
        setActiveLink({
            bookmark: window.location.pathname === '/bookmark',
            rated: window.location.pathname === '/rated',
        });
    }, []);

    return (
        <div className="text-white my-12 px-[14px] lg:px-[30px]">
        <Link
          href="./bookmark"
          className={`${activeLink.bookmark ? 'bg-orange-400 hover:bg-orange-300 text-black-500' : 'bg-gray-600'} rounded-3xl p-2 bg-gray-600 hover:bg-gray-500 text-sm`}
        > بعدا میبینم </Link>
        <Link
          href="./rated"
          className={`${activeLink.rated ? 'bg-orange-400 hover:bg-orange-300 text-black-500' : 'bg-gray-600'} rounded-3xl mr-2  p-2 bg-gray-600 hover:bg-gray-500 text-sm`}
        > دوست داشتم </Link>
        </div>
    );
};

export default Button;

