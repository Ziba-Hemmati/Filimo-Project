import { getLocalData } from "@/lib/localdata";
import WatchLater from "./WatchLater";
import DesktopInfo from "./DesktopInfo";
import EachMovieLike from "./EachMovieLike";
import MobileInfo from "./MobileInfo";
import BannerPoster from "@/components/eachMovie/BannerPoster";

const EachMovieBanner = async ({ mark }) => {
  const data = await getLocalData();
  const movies = data.movies;

  const target = movies.find((item) => {
    return item.id === Number(mark);
  });
  const {
    poster,
    faName,
    enName,
    rate,
    age,
    time,
    country,
    year,
    isDub,
    link,
    isSub,
    quality,
    genre,
    banner,
    factors: { director },
  } = target;

  return (
    <div className="text-white w-full">
      <div
        className="flex flex-col items-center md:items-start xl:px-[5%] xl:pt-[3%] py-5 bg-no-repeat bg-cover bg-blend-multiply bg-[rgba(0,0,0,.6)]"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="flex flex-col items-center md:flex-row md:items-start md:px-8">
          <BannerPoster
            link={link}
            poster={poster}
            faName={faName}
            enName={enName}
          />
          <div className="hidden md:inline-block">
            <DesktopInfo
              faName={faName}
              enName={enName}
              rate={rate}
              age={age}
              time={time}
              country={country}
              year={year}
              isDub={isDub}
              isSub={isSub}
              quality={quality}
              genre={genre}
            />
          </div>
          <div className="text-[.9rem] text-center px-2 md:text-right md:hidden">
            <MobileInfo
              faName={faName}
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
            <EachMovieLike target={target} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachMovieBanner;
