"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "@/redux/features/likeSlice";

const Like = ({ target }) => {
  const like = useSelector((store) => store.like);
  const dispatch = useDispatch();
  const isLiked = like.find((item) => {
    return item.id === target.id;
  });
  return (
    <div>
      <button
        className={`md:flex items-center ${isLiked && "text-orange-300"}`}
        onClick={() => dispatch(setLike(target))}
      >
        <FontAwesomeIcon icon={faHeart} className="md:mr-8 ml-1" />
        <div>دوست داشتم</div>
      </button>
    </div>
  );
};

export default Like;
