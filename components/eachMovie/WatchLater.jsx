"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { setBookmark } from "@/redux/features/bookMarkSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const WatchLater = ({ target }) => {
  const bookmark = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div>
      <button
        className={`md:flex items-center`}
        onClick= { () => dispatch(setBookmark(target))}
      >
        <FontAwesomeIcon icon={faBookmark} />
        <div className="md:mr-1">بعدا میبینم</div>
      </button>
    </div>
  );
};

export default WatchLater;
