import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="text-white my-12 px-[14px] lg:px-[30px]">
      <Link
        href="./bookmark"
        className="rounded-3xl p-2 bg-gray-600 hover:bg-gray-500 text-sm"
      > بعدا میبینم </Link>
      <Link
        href="./rated"
        className="rounded-3xl mr-2  p-2 bg-gray-600 hover:bg-gray-500 text-sm"
      > دوست داشتم </Link>
    </div>
  );
};

export default Button;
