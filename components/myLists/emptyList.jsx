import Image from "next/image";
import React from "react";
import emptyList from "@/assets/images/empty-list.svg"
const EmptyList = () => {
  return (
    <div div className="flex flex-col items-center mt-20">
      <Image
        src={emptyList}
        alt={"empty-list"}
        width="250"
        height="250"
      />
      <p className="text-gray-200 text-sm mt-4">فیلمی پیدا نشد</p>
    </div>
  );
};

export default EmptyList;
