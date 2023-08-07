"use client";
import { useSelector } from "react-redux";
import EmptyList from "./emptyList";
import SelectedMovie from "./SelectedMovie";

const BookMark = () => {
  const bookmark = useSelector((store) => store.bookmark);

  return (
    <div
      className={`${
        bookmark.length
          ? "grid grid-cols-2 gap-3 md:gap-2 lg:gap-3 gap-y- sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-white p-[14px] text-[.7rem] lg:px-[30px] mb-20"
          : ""
      }`}
    >
      {bookmark.length ? (
        bookmark.map(
          ({ poster, id, genre, year, country, isDub, rate, faName }) => {
            return (
              <SelectedMovie
                key={id}
                poster={poster}
                genre={genre}
                year={year}
                country={country}
                isDub={isDub}
                rate={rate}
                id={id}
                faName={faName}
                bookmark={bookmark}
              />
            );
          }
        )
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default BookMark;
