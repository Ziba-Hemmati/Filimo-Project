"use client";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import Link from "next/link";
import EmptyList from "./emptyList";
import PosterMovie from "../movies/PosterMovie";
const BookMark = () => {
  const bookmark = useSelector((store) => store.bookmark);
  //   console.log(bookmark);
  return (
    // <div className="flex w-[400px] text-white p-[10px] text-[.7rem] lg:px-[30px]">
    <div className="text-white flex items-center justify-center">
      {bookmark.length ? (
        bookmark.map(({ poster, id, genre, year, country, isDub, rate }) => {
          return (
            <PosterMovie
              key={id}
              poster={poster}
              genre={genre}
              year={year}
              country={country}
              isDub={isDub}
              rate={rate}
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
