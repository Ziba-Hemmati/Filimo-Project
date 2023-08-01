import { getLocalData } from "@/lib/localdata";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import WatchLater from "./WatchLater";
import Like from "./Like";

// *************************************************************************

const EachMovieBanner = async ({ mark }) => {
  const data = await getLocalData();
  const movies = data.movies;

  const target = movies.find((item) => {
    return item.id === Number(mark);
  });
  const {
    faName,
    enName,
    rate,
    age,
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

  return (
    <div className="text-white w-full">
      <div
        className="flex flex-col items-center md:items-start xl:px-[5%] xl:pt-[3%] py-5 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="md:flex md:px-8">
          <iframe
            src={link}
            frameBorder="0"
            className="opacity-100 w-[148px] h-[198px] rounded-[4px] mx-auto md:w-[240px] md:h-[320px] md:ml-8"
          ></iframe>

          <div className="hidden md:inline-block">
            <p className="text-base mb-8">فیلم {faName} </p>
            <p className="pb-3 text-[.8rem]">{enName} </p>

            <div className="w-[70px] px-2 md:px-0 md:mr-0 mr-1 pt-[1px] flex justify-between items-center rounded-3xl text-black">
              <span className="font-black text-[.6rem] bg-orange-800 py-[2.5px] pr-2 pl-1 rounded-tr-xl rounded-br-xl ">
                IMDb
              </span>
              <span className="bg-orange-400 text-[.8rem] pr-1 pl-2 rounded-tl-xl rounded-bl-xl ">
                10/{rate}
              </span>
            </div>
            <p className="text-orange-400 my-8 text-[.8rem] ">
              مناسب برای بالای {age} سال
            </p>
            <p className="text-[.8rem]">
              {time} - محصول {country} - {year} -
              {isDub ? " دوبله شده " : "دوبله نشده"}-
              {isSub ? " با زیرنویس " : "بدون زیرنویس"} - کیفیت {quality}
            </p>
            <div className="text-[.8rem] bg-gray-350 w-fit px-2 py-1 rounded-2xl mt-6">
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
        <div className="md:px-8 w-full flex justify-center md:inline-block">
          <div className="hidden md:inline-block border border-t-gray-300 w-full xl:mt-8"></div>
          <div className="flex text-[.8rem] w-44 md:w-60 justify-between items-center text-center mt-4 mb-2 xl:mb-4">
            <WatchLater target={target} />
            <Like target={target} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachMovieBanner;
