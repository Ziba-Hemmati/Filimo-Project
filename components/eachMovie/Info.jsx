"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import clsx from "clsx";

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
      <div
        className={clsx(
          `flex items-center justify-center pb-5 pt-3 transition-opacity`
        )}
      >
        {!isShow && (
          <div className={clsx(`flex items-center transition-opacity`)}>
            <p className="text-base">فیلم {faName} </p>
            <FontAwesomeIcon
              className="bg-white text-black rounded-full p-1 mr-2"
              icon={faAngleDown}
              onClick={handleClick}
            />
          </div>
        )}
        {isShow && (
          <div
            className={clsx(
              `flex flex-col items-center justify-center transition-opacity`
            )}
          >
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
                {time} - محصول {country} - {year} -{" "}
                {isDub ? "دوبله شده" : "دوبله نشده"}-{" "}
                {isSub ? "با زیرنویس" : "بدون زیرنویس"} - کیفیت {quality}
              </p>
              <div className=" bg-gray-500 w-fit p-1 rounded-2xl mx-auto mt-6">
                {genre}{" "}
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="pb-3">{enName} </p>
      <p className="pb-6">10/{rate} </p>
      <p className="text-orange-400 mb-8"> مناسب برای بالای {age} سال </p>
    </div>
  );
};

export default Info;
