"use client";
import EachMovieStory from "@/components/eachMovie/EachMovieStory";
import EachMovieModal from "@/components/eachMovie/EachMovieModal";
import { useCallback, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";

const EachMovieStoryAndTrailer = ({ mark, movies }) => {
  const [isOpen, setIsOpen] = useState(false);

  const target = movies.find((item) => {
    return item.id === Number(mark);
  });

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
      <div className="flex text-white relative overflow-hidden max-w-screen-xl px-[30px]  pt-10 mb-16">
        <div
          className="text-white relative overflow-hidden w-1/2 cursor-pointer h-[324px]"
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
