"use client";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import Link from "next/link";
import PosterMovie from "../movies/PosterMovie";
import EmptyList from "./emptyList";
const BookMark = () => {
  const bookmark = useSelector((store) => store.bookmark);
  return (
    <div
      className={`${
        bookmark.length
          ? "grid grid-cols-2 gap-3 md:gap-2 lg:gap-3 gap-y- sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-white p-[14px] text-[.7rem] lg:px-[30px]"
          : ""
      }`}
    >
      {bookmark.length ? (
        bookmark.map(({ poster, id, genre, year, country, isDub, rate }) => {
          {
            console.log(id);
          }
          return (
            <PosterMovie
              key={id}
              poster={poster}
              genre={genre}
              year={year}
              country={country}
              isDub={isDub}
              rate={rate}
              id={id}
            />
          );
        })
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default BookMark;
