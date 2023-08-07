"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const MobileInfo = ({
  faName,
  enName,
  rate,
  age,
  director,
  time,
  country,
  year,
  isDub,
  isSub,
  quality,
  genre,
}) => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => setIsShow((prev) => !prev);

  return (
    <div>
      <div className="flex justify-center items-center my-4">
        <span className="font-[700] "> فیلم {faName} </span>
        {!isShow && (
          <FontAwesomeIcon
            icon={faAngleDown}
            className="mr-2 text-black px-1 py-[3px] rounded-xl bg-white"
            onClick={handleClick}
          />
        )}
        {isShow && (
          <FontAwesomeIcon
            icon={faAngleUp}
            className="mr-2 text-black px-1 py-[3px] rounded-xl bg-white "
            onClick={handleClick}
          />
        )}
      </div>
      <p>{enName} </p>
      <div className="w-[70px] text-black flex items-center flex-row-reverse mx-auto mt-3">
        <span className="bg-orange-400 text-[.7rem] pr-1 pl-2 py-[2px] rounded-tl-xl rounded-bl-xl ">
          10/{rate}
        </span>
        <span className="font-black text-[.6rem] bg-orange-800 py-[3.2px] pr-2 pl-1 rounded-tr-xl rounded-br-xl ">
          IMDb
        </span>
      </div>
      <p className="text-orange-300 mt-8 mb-2 text-[12px] "> مناسب برای بالای {age} سال </p>

      {isShow && (
        <div className="text-[10px]">
          <p className="my-5"> کارگردان:{director} </p>
          <p className="leading-5">
            {time} - محصول {country} - {year} -
            {isDub ? " دوبله شده " : " دوبله نشده "} -
            {isSub ? " با زیرنویس " : " بدون زیرنویس "} - کیفیت {quality}
          </p>
          <p className="bg-gray-350 w-fit mx-auto mt-8 mb-4 py-1 px-2 rounded-3xl">
            {genre}
          </p>
        </div>
      )}
    </div>
  );
};

export default MobileInfo;
