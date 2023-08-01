import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ImdbRate from "../ImdbRate";
import ListOfBookMark from "./ListOfBookMark";
import { useState } from "react";

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
  const handleList = () => setList((prev) => !prev);

  return (
    <div className="relative">
      <div className="relative" onClick={() => setList(false)}>
        <Link href={`/movies/${id}`}>
          <img className="w-full h-full rounded-[4px]" src={poster} />
          <div className="bg-black-fade-600 opacity-0 absolute bottom-0 right-0 w-full h-full hover:opacity-90 transition-all duration-300 ">
            <div className="absolute bottom-0">
              <ImdbRate rate={rate} className={"bg-gray-500 mb-2"} />
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
        <Link href={`/movies/${id}`}>
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
