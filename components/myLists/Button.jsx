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
        <div>
            <div className="text-white mr-12 mt-12">
                <Link href="./rated" className={`rounded-3xl ml-2 p-2 text-xs ${activeLink.rated ? 'bg-orange-400 text-black hover:bg-orange-300' : 'bg-gray-600'} hover:bg-gray-500 `}>
                    دوست داشتم
                </Link>
                <Link href="./bookmark" className={`rounded-3xl ml-2 p-2 text-xs ${activeLink.bookmark ? 'bg-orange-400 text-black hover:bg-orange-300' : 'bg-gray-600'} hover:bg-gray-500 `}>
                    بعدا می‌بینم
                </Link>
            </div>

        </div>
    );
};

export default Button;
