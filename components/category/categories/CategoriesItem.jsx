import Link from "next/link";

const CategoryItem = ({ id, poster, faName, rate, genre, year, country }) => {
  return (
    <li key={id} className={"mx-2.5 lg2:m-2"}>
      <Link href={`/${faName}`}>
        <div key={id} className="relative">
          <img
            className="w-[130px] h-[175px] rounded-md md:w-[165px] md:h-[220px]"
            src={poster}
          />
          <div className="bg-black-fade-600 top-0 right-0 opacity-0 w-[130px] h-[175px] text-[0.7rem] absolute rounded-md md:w-[165px] md:h-[220px] hover:opacity-90 transition-all duration-300 ">
            <div className="text-white absolute bottom-0">
              <div className="flex w-fit justify-between items-end mb-3 mr-1">
                <span className="text-[0.6rem] font-black rounded-tr-xl rounded-br-xl bg-gray-400 bg-opacity-[.8] w-fit p-[3px] pr-2 items-center">
                  IMDb
                </span>
                <span className="text-[0.6rem] rounded-tl-xl rounded-bl-xl pl-2 bg-gray-400 bg-opacity-[.7] p-[3px]">
                  {rate}/10
                </span>
              </div>
              <p className="mb-3 mr-1">{genre}</p>
              <p className="mb-3 mr-1">
                {year} - {country}
              </p>
            </div>
          </div>
          <p className="truncate text-white w-[160px] text-[0.8rem] mt-4">
            {faName}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default CategoryItem;
