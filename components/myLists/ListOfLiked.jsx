import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
// import { setBookmark } from "@/redux/features/bookMarkSlice";
import { setLike } from "@/redux/features/likeSlice";

const ListOfLiked = ({ id }) => {
  //   const likedItem = bookmark.find((item) => item.id == id);
  const likeState = useSelector((store) => store.like);
  const thumbsUp = likeState.find((item) => item.id == id);
  const dispatch = useDispatch();
  return (
    <div className=" bg-black-500 border border-gray-600 h-[100px] p-3 grid grid-rows-2 w-[138px] rounded-[4px]">
      <div
        className={`${
          thumbsUp && "border border-green-500 text-green-500"
        } cursor-pointer`}
      >
        <div className="text-center mt-[9px] ">
          <FontAwesomeIcon icon={faThumbsUp} />
          <span> دوست داشتم </span>
        </div>
      </div>
      <div>
        <div className="cursor-pointer text-center mt-[9px] ">
          <FontAwesomeIcon icon={faThumbsDown} />
          <span onClick={() => dispatch(setLike(thumbsUp))}> دوست نداشتم </span>
        </div>
      </div>
    </div>
  );
};

export default ListOfLiked;
