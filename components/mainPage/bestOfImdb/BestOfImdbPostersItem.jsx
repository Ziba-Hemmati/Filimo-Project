"use client";
import clsx from "clsx";
import { useSelector } from "react-redux";

const BestOfImdbPostersItem = ({ poster, id, faName, handleClick }) => {
  const clickedItemId = useSelector((state) => state.bestOfImdb.clickedId);
  return (
    <li
      className={clsx("duration-300 hover:opacity-100 mx-2.5 lg2:m-2", {
        "opacity-60": id !== clickedItemId,
        "border-2 border-white rounded-md scale-[1.10]": id === clickedItemId,
      })}
    >
      <img
        className={"w-[130px] h-[175px] rounded-md md:w-[165px] md:h-[220px]"}
        onClick={() => handleClick(id)}
        src={poster}
        alt={faName}
      />
    </li>
  );
};

export default BestOfImdbPostersItem;
