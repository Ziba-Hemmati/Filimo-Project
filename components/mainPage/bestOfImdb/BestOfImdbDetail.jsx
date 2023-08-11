"use client";
import { useSelector } from "react-redux";
import Link from "next/link";

const BestOfImdbDetail = () => {
  const bestOfImdb = useSelector((state) => state.bestOfImdb.initValue);
  const clickedId = useSelector((state) => state.bestOfImdb.clickedId);
  const clickedItem = bestOfImdb.filter(({ id }) => id === clickedId);

  const {
    faName,
    enName,
    factors: { director },
    genre,
    story,
    age,
    time,
    country,
    year,
    quality,
    id,
  } = clickedItem[0];

  return (
    <div
      className={"w-full pt-4 pb-[85] absolute top-0 lg2:px-[100px] md:pt-6"}
    >
      <Link
        href={`/movies/${id}`}
        className={"font-iran-sans-medium text-[16px] font-bold"}
      >
        {faName}
      </Link>
      <p className={"text-[10px] text-gray-300 mt-5 mb-6"}>{enName}</p>
      <p className={"text-[10px] text-gray-300 mb-6"}>
        <span>کارگردان:</span>
        <span>{director}</span>
      </p>
      <p className={"mb-6"}>
        <span className={"text-[10px] rounded-3xl py-1 px-4 bg-black-600"}>
          {genre}
        </span>
      </p>
      <p
        className={
          "max-w-[552px] text-xs whitespace-nowrap overflow-hidden text-ellipsis mb-6"
        }
      >
        {story}
      </p>

      <p
        className={
          "text-[10px] sm:bg-black-600 inline rounded-3xl py-1 sm:px-4"
        }
      >
        <span>بالای {age} سال</span> - <span>{time}</span> -{" "}
        <span>محصول {country}</span> - <span>{year}</span> -{" "}
        <span>کیفیت {quality}</span>
      </p>
    </div>
  );
};

export default BestOfImdbDetail;
