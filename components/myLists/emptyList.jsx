import React from "react";
import Image from "next/image";

const EmptyList = () => {
  return (
    <div div className="flex flex-col items-center mt-20">
      <Image
        src="https://www.filimo.com/assets/web/ui/img-QYm1wdoO0Ei8zOsNXwQ3NA/empty-list.svg"
        alt="emty-list"
        width="250"
        height="250"
      />
      <p className="text-gray-200 text-sm mt-4">فیلمی پیدا نشد</p>
    </div>
  );
};

export default EmptyList;
