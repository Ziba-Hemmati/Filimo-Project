"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import VideoModal from "@/components/eachMovie/VideoModal";

const BannerPoster = ({ link, poster, faName, enName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      onClick={handleOpen}
      className="relative cursor-pointer md:ml-8 w-[148px] h-[197px] md:w-60 md:h-80"
    >
      <img
        className="w-full h-full rounded-[4px]"
        src={poster}
        alt={`${faName} : ${enName}`}
      />
      <div className="bg-[rgba(41,41,41,0)] opacity-0 absolute bottom-0 right-0 w-full h-full hover:bg-[rgba(41,41,41,0.4)] hover:opacity-100 transition-all duration-300 flex justify-center items-center">
        <button
          className={
            "flex justify-center items-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-700"
          }
        >
          <FontAwesomeIcon
            icon={faPlay}
            className={"text-[16px] translate-x-[1px]"}
          />
        </button>
      </div>
      {isOpen && (
        <VideoModal link={link} faName={faName} onClose={handleClose} />
      )}
    </div>
  );
};

export default BannerPoster;
