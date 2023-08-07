"use client";
import { useSelector } from "react-redux";
import LikedMovie from "./LikedMovie";
import EmptyList from "./emptyList";

const Like = () => {
  const like = useSelector((store) => store.like);

  return (
    <div
      className={`${
        like.length
          ? "grid grid-cols-2 gap-3 md:gap-2 lg:gap-3 gap-y- sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-white p-[14px] text-[.7rem] lg:px-[30px] mb-20"
          : ""
      }`}
    >
      {like.length ? (
        like.map(
          ({ poster, id, genre, year, country, isDub, rate, faName }) => {
            return (
              <LikedMovie
                key={id}
                poster={poster}
                genre={genre}
                year={year}
                country={country}
                isDub={isDub}
                rate={rate}
                id={id}
                faName={faName}
              />
            );
          },
        )
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Like;
