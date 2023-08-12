import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ListOfBookMark from "./ListOfBookMark";
import { useCallback, useState } from "react";

const SelectedMovie = ({
  id,
  poster,
  rate,
  genre,
  year,
  country,
  isDub,
  faName,
  isSub,
  bookmark,
}) => {
  const [list, setList] = useState(false);
  const handleList = useCallback(() => setList((prev) => !prev), []);
  const handleClick = useCallback(() => setList(false), []);

  return (
    <div className="relative">
      <div className="relative" onClick={handleClick}>
        <Link href={`/movies/${id}`}>
          <img
            className="w-full h-full rounded-[4px]"
            src={poster}
            alt={faName}
          />
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
      <div className="flex justify-between items-center cursor-pointer">
        <Link href={`/movies/${id}`} className="truncate">
          <p className="truncate my-4">{faName}</p>
        </Link>
        <FontAwesomeIcon
          onClick={handleList}
          icon={faEllipsisVertical}
          className="text-sm text-gray-200 hover:bg-gray-600 rounded-[50%] px-[11px] py-[6px] transition-all duration-200 "
        />
      </div>
      {list && (
        <div className="absolute bottom-12 left-0">
          <ListOfBookMark bookmark={bookmark} id={id} />
        </div>
      )}
    </div>
  );
};

export default SelectedMovie;
