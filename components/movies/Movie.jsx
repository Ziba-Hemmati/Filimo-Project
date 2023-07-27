import { getLocalData } from "../../lib/localdata";

const data = await getLocalData();
const movie = data.movies;

const Movie = () => {
  return (
    <div>
      <h3 className="text-white my-6 px-[10px] lg:px-[30px]">فیلم</h3>
      <div className="grid grid-cols-2 gap-2 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-white p-[10px] text-[.7rem] lg:px-[30px]">
        {movie.map(
          ({ poster, id, faName, genre, year, country, isDub, rate }) => {
            return (
              <div key={id} className="relative">
                <img className="w-full h-full rounded-[4px]" src={poster} />
                <div className=" bg-black-fade-600 opacity-0 absolute bottom-0 right-0 w-full h-full hover:opacity-90 transition-all duration-300 ">
                  <div className="absolute bottom-0">
                    <div className=" flex w-fit justify-between items-end mb-3 mr-1">
                      <span className="font-black rounded-tr-xl rounded-br-xl bg-gray-400 bg-opacity-[.8] w-fit p-[3px] pr-2  items-center">
                        IMDb
                      </span>
                      <span className="rounded-tl-xl rounded-bl-xl pl-2 bg-gray-400 bg-opacity-[.7] p-[3px]">
                        {rate}/10
                      </span>
                    </div>
                    <p className="mb-3 mr-1">{genre}</p>
                    <p className="mb-3 mr-1">
                      {year} - {country} {isDub && " - دوبله شده"}
                    </p>
                  </div>
                </div>
                <p className="truncate mt-4">{faName}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Movie;
