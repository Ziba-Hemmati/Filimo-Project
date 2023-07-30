"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import Link from "next/link";
const Like = () => {
  const like = useSelector((store) => store.like);
  //   console.log(bookmark);
  return (
    <div className="flex w-[400px] text-white p-[10px] text-[.7rem] lg:px-[30px]">
     
      <div className="text-white flex items-center justify-center">
        {like.length ? (
          like.map(
            ({ poster, id, genre, year, country, isDub, rate }) => {
              return (
                <div key={id} className="relative">
                  <div className="text-white" key={id}>
                    <Link href={`/movies/${id}`}>
                      <img
                        className="w-full rounded-[4px] h-[200px]"
                        src={poster}
                      />

                      <div className=" bg-black-fade-600 opacity-0 absolute bottom-0 right-0 w-full h-full hover:opacity-90 transition-all duration-300 ">
                        <div className="absolute bottom-0">
                          <div className=" flex w-fit justify-between items-end mb-3 mr-1">
                            <span className="font-black rounded-tr-xl rounded-br-xl bg-gray-400 bg-opacity-[.8] w-fit p-[3px] pr-2  items-center">
                              IMDb
                            </span>
                            <span className="rounded-tl-xl rounded-bl-xl pl-2 bg-gray-400 bg-opacity-[.7] p-[3px]">
                              {rate}/10
                            </span>
                          </div>
                          <p className="mb-3 mr-1">{genre}</p>
                          <p className="mb-3 mr-1">
                            {year} - {country} {isDub && " - دوبله شده"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            }
          )
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
      
     </div>
  );
};

export default Like;
