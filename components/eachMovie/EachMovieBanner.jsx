"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faBookmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import EachMovieModal from "@/components/eachMovie/EachMovieModal";
import { useState } from "react";

// *************************************************************************

const EachMovieBanner = ({ mark, movies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const target = movies.find((item) => {
    return item.id === Number(mark);
  });
  const {
    id,
    faName,
    enName,
    rate,
    age,
    factors,
    time,
    country,
    year,
    isDub,
    isSub,
    quality,
    genre,
    banner,
    link,
    factors: { director },
  } = target;

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-white w-full">
      <div
        className="flex flex-col items-center md:items-start xl:px-[5%] xl:pt-[3%] py-5 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="md:flex md:px-8">
          {/*<iframe*/}
          {/*  src={link}*/}
          {/*  frameborder="0"*/}
          {/*  className="w-[148px] h-[198px] rounded-[4px] mx-auto md:w-[240px] md:h-[320px] md:ml-8"*/}
          {/*></iframe>*/}
          <div
            onClick={handleOpen}
            className={"w-[148px] h-[198px] rounded-[4px] bg-black-600"}
          ></div>
          <div className="hidden md:inline-block">
            <p className="text-base mb-8">فیلم {faName} </p>
            <p className="pb-3 text-[.8rem]">{enName} </p>
            <p className="pb-6 text-[.8rem] ">10/{rate} </p>
            <p className="text-orange-400 mb-8 text-[.8rem]">
              {" "}
              مناسب برای بالای {age} سال{" "}
            </p>
            <p className="text-[.8rem]">
              {time} - محصول {country} - {year} -
              {isDub ? " دوبله شده " : "دوبله نشده"}-
              {isSub ? " با زیرنویس " : "بدون زیرنویس"} - کیفیت {quality}
            </p>
            <div className="text-[.8rem] bg-gray-500 w-fit p-1 rounded-2xl mt-6">
              {genre}
            </div>
          </div>

          <div className="text-[.9rem] text-center px-2 md:text-right md:hidden">
            <Info
              faName={faName}
              faAngleDown={faAngleDown}
              faAngleUp={faAngleUp}
              enName={enName}
              rate={rate}
              age={age}
              director={director}
              time={time}
              country={country}
              year={year}
              isDub={isDub}
              isSub={isSub}
              quality={quality}
              genre={genre}
            />
          </div>
        </div>
        <div className="md:px-8 w-full">
          <div className="hidden md:inline-block border border-t-gray-300 w-full xl:mt-8"></div>
          <div className="flex-col flex text-center md:flex-row md:flex items-center mt-4 mb-2 xl:mb-4">
            <button className="md:flex items-center">
              <FontAwesomeIcon icon={faBookmark} />
              <div className="mb-4 md:mb-0 md:mr-1">بعدا میبینم</div>
            </button>
            <button className="md:flex items-center">
              <FontAwesomeIcon icon={faHeart} className="md:mr-8 ml-1" />
              <div>دوست داشتم</div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && <EachMovieModal link={link} onClose={handleClose} />}
    </div>
  );
};

export default EachMovieBanner;
