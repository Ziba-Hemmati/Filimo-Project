"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import clsx from "clsx";
import ImdbRate from "../ImdbRate";

const Info = ({
  faName,
  faAngleDown,
  faAngleUp,
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
      <div className={clsx(`flex items-center justify-center pb-3 pt-3`)}>
        {!isShow && (
          <div className={clsx(`flex items-center`)}>
            <p className="text-base">فیلم {faName} </p>
            <FontAwesomeIcon
              className="bg-white text-black rounded-full p-1 mr-2"
              icon={faAngleDown}
              onClick={handleClick}
            />
          </div>
        )}
        {isShow && (
          <div className={clsx(`flex flex-col items-center justify-center`)}>
            <div className="flex items-center">
              <p className="text-base">فیلم {faName} </p>
              <FontAwesomeIcon
                className="bg-white text-black rounded-full p-1 mr-2"
                icon={faAngleUp}
                onClick={handleClick}
              />
            </div>
            <div>
              <p className="leading-[60px]">کارگردان:{director}</p>
              <p>
                {time} - محصول {country} - {year} -
                {isDub ? " دوبله شده " : "دوبله نشده"}-
                {isSub ? " با زیرنویس " : "بدون زیرنویس"} - کیفیت {quality}
              </p>
              <div className=" bg-gray-500 w-fit p-1 rounded-2xl mx-auto mt-6">
                {genre}
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="pb-3">{enName} </p>
      <div className="flex justify-center">
        <ImdbRate
          rate={rate}
          className={"bg-orange-400 text-[.8rem] w-[82px] mb-2 "}
        />
      </div>
      <p className="text-orange-300 my-6"> مناسب برای بالای {age} سال </p>
    </div>
  );
};

export default Info;
