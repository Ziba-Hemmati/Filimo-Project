"use client";
import EachMovieStory from "@/components/eachMovie/EachMovieStory";
import EachMovieModal from "@/components/eachMovie/EachMovieModal";
import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { findMovieById } from "@/utils/findMovieById";

const EachMovieStoryAndTrailer = ({ mark, movies }) => {
  const [isOpen, setIsOpen] = useState(false);

  const target = findMovieById(mark, movies);

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
      <div className="flex flex-col md:flex-row  text-white relative overflow-hidden  px-2.5 md:px-8 xl:px-[178px] pt-10">
        <div
          className="text-white mb-5 md:mb-0 relative overflow-hidden w-full md:w-1/2 cursor-pointer h-[324px]"
          onClick={handleOpen}
        >
          <img
            src={album[randomIndex]}
            alt={`${faName} : ${enName}`}
            className={"h-full w-full object-cover"}
          />
          <div
            className={
              "absolute bottom-4 right-2 rounded-[35px] bg-black opacity-80 pl-2.5 flex items-center"
            }
          >
            <span
              className={
                "flex items-center justify-center bg-white w-6 h-6 rounded-full ml-2"
              }
            >
              <FontAwesomeIcon
                icon={faCameraAlt}
                className={"text-[15px] text-black"}
              />
            </span>
            <span className={"text-[11px]  text-white"}>
              {album.length} عکس
            </span>
          </div>
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
