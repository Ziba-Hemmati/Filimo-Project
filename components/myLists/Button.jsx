import React from 'react';
import Link from "next/link";

const Button = () => {
    return (
        <div>
            <div className="text-white mr-12 mt-12">
                <Link href="./bookmark" className="rounded-3xl ml-2 p-2 bg-gray-600 hover:bg-gray-500 text-sm">بعدا میبینم </Link>
                <Link href="./rated" className="rounded-3xl ml-2 p-2 bg-gray-600 hover:bg-gray-500 text-sm">دوست داشتم </Link>
            </div>
        </div>
    );
};

export default Button;