import Link from "next/link";
import ImdbRate from "../ImdbRate";

const PosterMovie = ({
  id,
  poster,
  rate,
  genre,
  year,
  country,
  isDub,
  faName,
  isSub,
}) => {
  return (
    <div>
      <div key={id} className="relative">
        <Link href={`/movies/${id}`}>
          <img className="w-full h-full rounded-[4px]" src={poster} />
          <div className="bg-black-fade-600 opacity-0 absolute bottom-0 right-0 w-full h-full hover:opacity-90 transition-all duration-300 ">
            <div className="absolute bottom-0">
              <ImdbRate rate={rate} className={"bg-gray-500 mb-2"} />
              <p className="mb-3 mr-1">{genre}</p>
              <p className="mb-3 mr-1">
                {year} - {country} {isDub && " - دوبله شده"}
                {isSub && " - زیر نویس دارد "}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <p className="truncate my-4">{faName}</p>
    </div>
  );
};

export default PosterMovie;