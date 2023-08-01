"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { setBookmark } from "@/redux/features/bookMarkSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import BookMark from "../myLists/BookMark";

const WatchLater = ({ target }) => {
  const bookmark = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();
  const isExist = bookmark.find((item) => {
    return item.id == target.id;
  });
  // const [isActive, setIsActive] = useState(false);
  // const handleClick = () => {
  //   setIsActive((prev) => !prev);
  // };
  return (
    <div>
      <button
        className={`md:flex items-center ${isExist && "text-orange-300"}`}
        onClick={() => dispatch(setBookmark(target))}
      >
        <FontAwesomeIcon icon={faBookmark} />
        <div className="md:mr-1">بعدا میبینم</div>
      </button>
    </div>
  );
};

export default WatchLater;
