"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import Link from "next/link";
import EmptyList from "./emptyList";
import PosterMovie from "../movies/PosterMovie";
const Like = () => {
  const like = useSelector((store) => store.like);
  //   console.log(bookmark);
  return (
    <div className="flex w-[400px] text-white p-[10px] text-[.7rem] lg:px-[30px]">
      <div className="text-white flex items-center justify-center">
        {like.length ? (
          like.map(({ poster, id, genre, year, country, isDub, rate }) => {
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
    </div>
  );
};

export default Like;
