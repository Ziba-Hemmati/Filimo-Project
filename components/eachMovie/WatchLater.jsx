"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark} from "@fortawesome/free-solid-svg-icons";
import { setBookmark } from "@/redux/features/bookMarkSlice";
import { useDispatch, useSelector } from "react-redux";
import { findMovieByCategory } from "@/utils/findMovieByCategory";

const WatchLater = ({ target }) => {
  const bookmark = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();
  const isExist = findMovieByCategory(target, bookmark);

  return (
    <>
      <button
        className={`md:flex items-center md:bg-gray-250 md:hover:bg-gray-200 md:hover:bg-opacity-[.3] transition-colors duration-300 md:bg-opacity-[.2] md:px-3 md:py-2 rounded-3xl ${
          isExist &&
          "text-orange-400 md:outline outline-2 outline-orange-400 md:hover:bg-orange-300 md:hover:bg-opacity-[1] hover:text-black"
        }`}
        onClick={() => dispatch(setBookmark(target))}
      >
        <FontAwesomeIcon icon={faBookmark} />
        <div className="md:mr-1 text-[11px]">بعدا میبینم</div>
      </button>
    </>
  );
};

export default WatchLater;
