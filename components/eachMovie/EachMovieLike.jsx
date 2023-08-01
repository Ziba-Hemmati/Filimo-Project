"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "@/redux/features/likeSlice";

const EachMovieLike = ({ target }) => {
  const like = useSelector((store) => store.like);
  const dispatch = useDispatch();
  const isLiked = like.find((item) => {
    return item.id === target.id;
  });
  return (
    <div>
      <button
        className={`md:flex items-center  md:bg-gray-200 md:bg-opacity-[.2] md:px-3 md:py-2 rounded-3xl ${isLiked && "text-orange-300 outline outline-2 outline-orange-300"}`}
        onClick={() => dispatch(setLike(target))}
      >
        <FontAwesomeIcon icon={faHeart} className="ml-1" />
        <div>دوست داشتم</div>
      </button>
    </div>
  );
};

export default EachMovieLike;
