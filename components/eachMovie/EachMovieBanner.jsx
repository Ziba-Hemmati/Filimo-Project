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
import Info from "./Info";

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
    <div className="text-white w-full">
      <div
        className="flex flex-col items-center py-5"
        style={{ backgroundImage: `url("${banner}")`}}
      >
        <iframe
          src={link}
          frameborder="0"
          className="w-[148px] h-[198px] rounded-[4px] "
        ></iframe>
        <div className="text-[.9rem] text-center px-2">
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
