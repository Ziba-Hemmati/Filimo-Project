"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { setBookmark } from "@/redux/features/bookMarkSlice";
import { useDispatch, useSelector } from "react-redux";

const WatchLater = ({ target }) => {
  const bookmark = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();
  const isExist = bookmark.find((item) => {
    return item.id == target.id;
  });
  
  return (
    <div>
      <button
        className={`md:flex items-center md:bg-gray-250 hover:bg-gray-200 hover:bg-opacity-[.3] transition-colors duration-300 md:bg-opacity-[.2] md:px-3 md:py-2 rounded-3xl ${
          isExist &&
          "text-orange-400 md:outline outline-2 outline-orange-400 hover:bg-orange-400 hover:bg-opacity-100 hover:text-black"
        }`}
        onClick={() => dispatch(setBookmark(target))}
      >
        <FontAwesomeIcon icon={faBookmark} />
        <div className="md:mr-1 text-[11px]">بعدا میبینم</div>
      </button>
    </div>
  );
};

export default WatchLater;
