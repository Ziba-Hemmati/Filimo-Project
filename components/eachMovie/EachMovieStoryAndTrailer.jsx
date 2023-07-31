"use client";
import EachMovieStory from "@/components/eachMovie/EachMovieStory";
import EachMovieModal from "@/components/eachMovie/EachMovieModal";
import { useCallback, useState } from "react";

const EachMovieStoryAndTrailer = ({ mark, movies }) => {
  const [isOpen, setIsOpen] = useState(false);

  const target = movies.find((item) => {
    return item.id === Number(mark);
  });
  useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const { faName, enName, album, about, story } = target;
  const randomIndex = Math.floor(Math.random() * album.length);

  return (
    <div className={"flex justify-center"}>
      <div className="flex text-white relative overflow-hidden max-w-screen-xl px-[30px] pt-10 mb-16">
        <div
          className="text-white relative overflow-hidden w-1/2 cursor-pointer h-[324px]"
          onClick={handleOpen}
        >
          <img
            src={album[randomIndex]}
            alt={`${faName} : ${enName}`}
            className={"h-full w-full object-cover"}
          />
        </div>
        <EachMovieStory faName={faName} story={story} about={about} />
      </div>
      {isOpen && (
        <EachMovieModal album={album} faName={faName} onClose={handleClose} />
      )}
    </div>
  );
};

export default EachMovieStoryAndTrailer;
