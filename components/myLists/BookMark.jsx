"use client";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import Link from "next/link";
import EmptyList from "./EmptyList";
import PosterMovie from "../movies/PosterMovie";
const BookMark = () => {
  const bookmark = useSelector((store) => store.bookmark);
  //   console.log(bookmark);
  return (
    // <div className="flex w-[400px] text-white p-[10px] text-[.7rem] lg:px-[30px]">
    // <div className="flex">
    // <div className="grid grid-cols-2 gap-3 md:gap-2 lg:gap-3 gap-y- sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-white p-[14px] text-[.7rem] lg:px-[30px]">
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
    // </div>
  );
};

export default BookMark;
