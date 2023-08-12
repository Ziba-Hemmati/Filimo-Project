"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "@/redux/features/likeSlice";
import { useCallback, useState } from "react";
import { markedMovie } from "@/utils/markedMovie";

const EachMovieLike = ({ target }) => {
  const like = useSelector((store) => store.like);
  const dispatch = useDispatch();
  const isLiked = markedMovie(like, target);

  const handleLike = useCallback(() => dispatch(setLike(target)), []);

  const [toggle, setToggle] = useState(false);
  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
    setTimeout(() => {
      setToggle(false);
    }, 1500);
  }, []);

  const successMessage = 'به لیست "دوست داشتم" اضافه شد.';
  const errorMessage = 'از لیست "دوست داشتم" حذف شد.';

  return (
    <>
      <div onClick={handleToggle}>
        <button
          className={`md:flex items-center md:bg-gray-250 md:hover:bg-gray-200 md:hover:bg-opacity-[.3] transition-colors duration-300 md:bg-opacity-[.2] md:px-3 md:py-2 rounded-3xl ${
            isLiked &&
            "text-orange-400 md:outline md:outline-2 md:outline-orange-400 md:hover:bg-orange-400 md:hover:bg-opacity-[1] hover:text-black"
          }`}
          onClick={handleLike}
        >
          <FontAwesomeIcon icon={faHeart} className="ml-1" />
          <div className="text-[11px]">دوست داشتم</div>
        </button>
      </div>
      {isLiked
        ? toggle && (
            <div className="absolute left-3 top-[101px] md:top-[458px] lg:top-[430px] xl:top-[462px] xl2:top-[472px] md:left-8 xl:left-[178px] bg-green-500 p-4 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faClose}
                className="ml-2 hover:text-black text-lg transition-colors duration-300"
                onClick={() => setToggle(false)}
              />
              <p>{successMessage} </p>
            </div>
          )
        : toggle && (
            <div className="absolute  left-3 top-[101px] md:top-[458px] lg:top-[430px] xl:top-[462px] xl2:top-[472px] md:left-8 xl:left-[178px] bg-red-500 p-4 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faClose}
                className="ml-2 hover:text-black text-lg transition-colors duration-300"
                onClick={() => setToggle(false)}
              />
              <p>{errorMessage}</p>
            </div>
          )}
    </>
  );
};

export default EachMovieLike;
