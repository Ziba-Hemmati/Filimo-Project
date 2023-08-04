import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
// import { setBookmark } from "@/redux/features/bookMarkSlice";
import { setLike } from "@/redux/features/likeSlice";
import { useState } from "react";

const ListOfLiked = ({ like, id }) => {
  //   const likedItem = bookmark.find((item) => item.id == id);
  const likeState = useSelector((store) => store.like);
  const thumbsUp = likeState.find((item) => item.id == id);
  const dispatch = useDispatch();
  const [isDisLike, setIsDisLike] = useState(false);
  const handleDisLike = () => {
    setIsDisLike((prev) => !prev);
  };
  return (
    <div className=" bg-black-500 border border-gray-600 h-[100px] p-3 grid grid-rows-2 w-[138px] rounded-[4px]">
      <div
        className={`${thumbsUp && "border border-green-500 text-green-500"} `}
      >
        <div className="text-center mt-[9px] ">
          <FontAwesomeIcon icon={faThumbsUp} />
          <span> دوست داشتم </span>
        </div>
      </div>
      <div>
        <div
          className={`cursor-pointer text-center mt-[9px] ${
            isDisLike && "border border-red-500 text-red-500"
          }`}
          onClick={handleDisLike}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
          <span
            onClick={() =>
              setTimeout(() => {
                dispatch(setLike(thumbsUp));
              }, 1000)
            }
          >
            دوست نداشتم
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListOfLiked;
