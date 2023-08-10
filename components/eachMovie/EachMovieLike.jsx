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
        className={`md:flex items-center md:bg-gray-250 md:hover:bg-gray-200 hover:bg-opacity-[.3] transition-colors duration-300 md:bg-opacity-[.2] md:px-3 md:py-2 rounded-3xl ${
          isLiked &&
          "text-orange-400 md:outline md:outline-2 md:outline-orange-400 md:hover:bg-orange-400 md:hover:bg-opacity-[1] hover:text-black"
        }`}
        onClick={() => dispatch(setLike(target))}
      >
        <FontAwesomeIcon icon={faHeart} className="ml-1" />
        <div className="text-[11px]">دوست داشتم</div>
      </button>
    </div>
  );
};

export default EachMovieLike;
