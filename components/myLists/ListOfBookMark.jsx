import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setBookmark } from "@/redux/features/bookMarkSlice";
import { setLike } from "@/redux/features/likeSlice";
import { useState } from "react";

const ListOfBookMark = ({ bookmark, id }) => {
  const likedItem = bookmark.find((item) => item.id == id);
  const likeState = useSelector((store) => store.like);
  const thumbsUp = likeState.find((item) => item.id == id);
  const dispatch = useDispatch();
  const [disLike, setDisLike] = useState(false);
  const handleDisLike = () => setDisLike((prev) => !prev);
  return (
    <div className=" bg-black-500 border border-gray-600 h-[138px] p-3 grid grid-rows-3 w-[138px] rounded-[4px]">
      <div
        className={`${
          thumbsUp && "border border-green-500 text-green-500"
        } cursor-pointer`}
        onClick={() => dispatch(setLike(likedItem))}
      >
        <div className="text-center mt-[9px]">
          <FontAwesomeIcon icon={faThumbsUp} />
          <span> دوست داشتم </span>
        </div>
      </div>
      <div
        onClick={handleDisLike}
        className={`${disLike && "border border-red-500 text-red-500"}`}
      >
        <div
          className={`cursor-pointer text-center mt-[9px]`}
          onClick={() => dispatch(setLike(thumbsUp))}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
          <span> دوست نداشتم </span>
        </div>
      </div>
      <div onClick={() => dispatch(setBookmark(likedItem))}>
        <div className="cursor-pointer text-center pt-2">
          <FontAwesomeIcon icon={faCircleMinus} />
          <span> حذف از لیست </span>
        </div>
      </div>
    </div>
  );
};

export default ListOfBookMark;