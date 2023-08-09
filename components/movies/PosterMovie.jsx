import Link from "next/link";

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
      <div className="relative">
        <Link href={`/movies/${id}`}>
          <img className="w-full h-full rounded-[4px]" src={poster} />
          <div className="bg-black-fade-600 opacity-0 absolute bottom-0 right-0 w-full h-full hover:opacity-90 transition-all duration-300 ">
            <div className="absolute bottom-0">
              <div className="flex items-end mr-1 mb-2">
                <div className="font-bold bg-gray-300 rounded-tr-xl rounded-br-xl py-[3.2px] pr-2 pl-1 bg-opacity-[.6] text-[.6rem] ">
                  IMDb
                </div>
                <div className="bg-gray-800 rounded-tl-xl rounded-bl-xl py-[2px] pl-2 pr-1 bg-opacity-[.6]">
                  {rate}/10
                </div>
              </div>
              <p className="mb-3 mr-1">{genre}</p>
              <p className="mb-3 mr-1">
                {year} - {country} {isDub && " - دوبله شده "}
                {isSub && " - زیر نویس دارد "}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <p className="truncate my-4">
        <Link href={`/movies/${id}`}>{faName}</Link>
      </p>
    </div>
  );
};

export default PosterMovie;
