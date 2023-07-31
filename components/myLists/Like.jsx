"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import Link from "next/link";
import EmptyList from "./EmptyList";
import PosterMovie from "../movies/PosterMovie";
const Like = () => {
  const like = useSelector((store) => store.like);
  //   console.log(bookmark);
  return (
    <>
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
              id={id}
            />
          );
        })
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Like;
