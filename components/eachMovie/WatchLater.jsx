"use client";
import { setBookmark } from "@/redux/features/bookMarkSlice";
import { useDispatch, useSelector } from "react-redux";

const WatchLater = ({ target }) => {
  const bookmark = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="md:flex items-center"
        onClick={() => dispatch(setBookmark(target))}
      >
        {/* <FontAwesomeIcon icon={faBookmark} /> */}
        <div className="mb-4 md:mb-0 md:mr-1">بعدا میبینم</div>
      </button>
    </div>
  );
};

export default WatchLater;
