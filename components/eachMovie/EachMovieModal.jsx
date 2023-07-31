"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const EachMovieModal = ({ link, onClose }) => {
  return (
    <div className="text-white fixed flex justify-center items-center w-screen h-screen top-0 right-0 z-10">
      <div
        className={"w-full h-full bg-black opacity-95 absolute top-0 right-0"}
      ></div>

      <button
        className={
          "top-8 right-8 absolute w-7 h-7  rounded-full border-2 border-orange-700 flex justify-center items-center"
        }
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faClose} className={"w-full text-xl h-full"} />
      </button>
      <iframe
        src={link}
        frameborder="0"
        className={"w-[50%] h-[65%] z-10"}
      ></iframe>
    </div>
  );
};

export default EachMovieModal;
