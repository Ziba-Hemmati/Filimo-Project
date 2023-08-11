import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";

const VideoModal = ({ onClose, link }) => {
  const handleClick = useCallback((e) => {
    e.stopPropagation();
    onClose();
  }, []);

  return (
    <div
      className={
        "text-white fixed flex flex-col items-center w-screen h-screen top-0 right-0 z-[25]"
      }
    >
      <button
        className={
          "top-8 right-8 absolute w-7 h-7 flex justify-center items-center"
        }
        onClick={(e) => handleClick(e)}
      >
        <FontAwesomeIcon icon={faClose} className={"w-full text-xl h-full"} />
      </button>
      <div className={"w-full h-full"}>
        <iframe src={link} className={"w-full h-full"}></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
