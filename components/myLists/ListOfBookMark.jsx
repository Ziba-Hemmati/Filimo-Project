import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setBookmark } from "@/redux/features/bookMarkSlice";
import { setLike } from "@/redux/features/likeSlice";
import { useCallback } from "react";
import { findMovieById } from "@/utils/findMovieById";

const ListOfBookMark = ({ bookmark, id }) => {
  const likedItem = findMovieById(id, bookmark);
  const likeState = useSelector((store) => store.like);
  const thumbsUp = findMovieById(id, likeState);
  const dispatch = useDispatch();
  const handleBookMark = useCallback(
    () => dispatch(setBookmark(likedItem)),
    []
  );
  const handleLike = useCallback(() => dispatch(setLike(likedItem)), []);
  const like = "دوست داشتم ";
  const deleteItem = "حذف از لیست ";

  return (
    <div className="relative">
      <div className="bg-black-500 border border-gray-600 h-[100px] p-3 grid grid-rows-2 w-[138px] rounded-[4px]">
        <div
          className={`${
            thumbsUp && "border border-green-500 text-green-500 rounded-[4px]"
          } cursor-pointer`}
          onClick={handleLike}
        >
          <div className="text-center mt-[9px] hover:text-green-500 transition-colors duration-300">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span> {like} </span>
          </div>
        </div>
        <div onClick={handleBookMark}>
          <div className="cursor-pointer text-center pt-2 mt-1 hover:text-red-500 transition-colors duration-300 ">
            <FontAwesomeIcon icon={faCircleMinus} />
            <span> {deleteItem} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfBookMark;
