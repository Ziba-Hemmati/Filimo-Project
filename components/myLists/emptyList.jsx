"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const EmptyList = () => {
  const bookmark = useSelector((store) => store.bookmark);
//   console.log(bookmark);
  return (
    <div className="text-white flex items-center justify-center">
      {bookmark.length ? (
        bookmark.map((movie) => {
          return <div className="text-white" key={movie.id} >{movie.id}</div>;
        })
      ) : (
        <Image
          src="https://www.filimo.com/assets/web/ui/img-QYm1wdoO0Ei8zOsNXwQ3NA/empty-list.svg"
          alt="emty-list"
          width="100"
          height="100"
          className="w-[15%]"
        />
      )}
    </div>
  );
};

export default EmptyList;
