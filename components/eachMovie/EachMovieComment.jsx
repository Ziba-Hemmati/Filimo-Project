import React from "react";
import { getLocalData } from "@/lib/localdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import EachMovieCommentItems from "./EachMovieCommentItems";

const EachMovieComment = async ({ mark }) => {
  const data = await getLocalData();
  const movie = data.movies;

  const target = movie.find((item) => {
    return item.id === Number(mark);
  });
  const { faName, comments } = target;

  return (
    <>
      <div className="px-7 xl:px-[8.75rem] mt-8 mb-16">
        <div className="mb-3">
          <h2 className="text-sm font-bold">دیدگاه‌های فیلم {faName}</h2>
        </div>

        <div className="flex mb-7">
          <input
            placeholder="این فیلم چطور بود؟"
            className="w-full bg-black-600 placeholder:text-gray-300 placeholder:text-xs px-3 py-2 rounded-s-md outline-none"
          />

          <button className="bg-black-fade-600 rounded-e-md py-2 px-3 flex justify-center items-center">
            <img src="/icons/message.png" />
          </button>
        </div>
  
        {comments.map(({ id, name, date, text }) => {
          return (
            <EachMovieCommentItems
              key={id}
              id={id}
              name={name}
              date={date}
              text={text}
            />
          );
        })}
      </div>
    </>
  );
};

export default EachMovieComment;