import { getLocalData } from "@/lib/localdata";
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

// *************************************************************************

const EachMovieBanner = async ({ mark }) => {
  const data = await getLocalData();
  const movie = data.movies;

  const target = movie.find((item) => {
    return item.id === Number(mark);
  });
  const {
    id,
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
    <div className="text-white w-full ">
      <div
        className="h-[90vh] flex flex-col items-center py-5"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <iframe
          src={link}
          frameborder="0"
          className="w-[148px] h-[198px] rounded-[4px] "
        ></iframe>
        <div className="text-[.9rem] text-center">
          <div className="flex items-center justify-center pb-5 pt-3">
            <p className="text-base">فیلم {faName} </p>
            <FontAwesomeIcon
              className="bg-white text-black rounded-full p-1 mr-2 "
              icon={faAngleDown}
            />
            <FontAwesomeIcon
              className="bg-white text-black rounded-full p-1 hidden "
              icon={faAngleUp}
            />
          </div>
          <p className="pb-3">{enName} </p>
          <p className="pb-6">10/{rate} </p>
          <p className="text-orange-400 mb-8"> مناسب برای بالای {age} سال </p>
          <p className="hidden">کارگردان:{director}</p>
          <p className="hidden">
            {time} - محصول {country} - {year} -{" "}
            {isDub ? "دوبله شده" : "دوبله نشده"} -{" "}
            {isSub ? "با زیرنویس" : "بدون زیرنویس"} - کیفیت {quality}
          </p>
          <div className="hidden">{genre} </div>
          <FontAwesomeIcon icon={faBookmark} />
          <div className="mb-4">بعدا میبینم</div>
          <FontAwesomeIcon icon={faHeart} />
          <div>دوست داشتم</div>
        </div>
      </div>
    </div>
  );
};

export default EachMovieBanner;
