import React from "react";
import Image from "next/image";

const EmptyList = () => {
  return (
      <>
          <div className="flex flex-col justify-center items-center mt-20">
              <Image
                  src="https://www.filimo.com/assets/web/ui/img-QYm1wdoO0Ei8zOsNXwQ3NA/empty-list.svg"
                  alt="emty-list"
                  width="100"
                  height="100"
                  className="w-[80%]"
              />
              <p className="text-sm text-gray-200">فیلمی پیدا نشد</p>
          </div>
      </>
);
};

export default EmptyList;
