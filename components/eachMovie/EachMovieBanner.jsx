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
import ImdbRate from "../ImdbRate";

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
            className="w-[148px] h-[198px] rounded-[4px] mx-auto md:w-[240px] md:h-[320px] md:ml-8"
          ></iframe>

          <div className="hidden md:inline-block">
            <p className="text-base">فیلم {faName} </p>
            <p className="pb-3 text-[.8rem]">{enName} </p>
            <ImdbRate
              rate={rate}
              className={"bg-orange-300 text-[.8rem] w-[82px] mb-2"}
            />
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
