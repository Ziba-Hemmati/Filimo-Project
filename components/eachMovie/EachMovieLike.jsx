"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "@/redux/features/likeSlice";
import { useCallback, useState } from "react";

const EachMovieLike = ({ target }) => {
  const like = useSelector((store) => store.like);
  const dispatch = useDispatch();
  const isLiked = like.find((item) => {
    return item.id === target.id;
  });
  // const [toggle, setToggle] = useState(false);
  // const handleToggle = useCallback(() => {
  //   setToggle(true);
  //   setTimeout(() => {
  //     setToggle(false);
  //   }, 1500);
  // }, [toggle]);

  return (
    <>
      {/* <div onClick={handleToggle}> */}
        <button
          className={`md:flex items-center md:bg-gray-250 hover:bg-gray-200 hover:bg-opacity-[.3] transition-colors duration-300 md:bg-opacity-[.2] md:px-3 md:py-2 rounded-3xl ${
            isLiked &&
            "text-orange-400 md:outline outline-2 outline-orange-400 md:hover:bg-orange-400 md:hover:bg-opacity-[1] md:hover:text-black"
          }`}
          onClick={() => dispatch(setLike(target))}
        >
          <FontAwesomeIcon icon={faHeart} className="ml-1" />
          <div className="text-[11px]">دوست داشتم</div>
        </button>
      {/* </div> */}

      {/* {toggle
        ? isLiked && (
            <div className="absolute left-3 top-[102px] md:top-[458px] lg:top-[430px] xl:top-[462px] xl2:top-[472px] md:left-8 xl:left-[178px] bg-green-500 p-4 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faClose}
                className="ml-2 hover:text-black text-lg transition-colors duration-300"
                onClick={() => setToggle(false)}
              />
              <p>به لیست "دوست داشتم" اضافه شد.</p>
            </div>
          )
        : ""}
      {toggle
        ? isLiked === undefined && (
            <div className="absolute  left-3 top-[102px] md:top-[458px] lg:top-[430px] xl:top-[462px] xl2:top-[472px] md:left-8 xl:left-[178px] bg-red-500 p-4 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faClose}
                className="ml-2 hover:text-black text-lg transition-colors duration-300"
                onClick={() => setToggle(false)}
              />
              <p>از لیست "دوست داشتم" حذف شد.</p>
            </div>
          )
        : ""} */}
    </>
  );
};

export default EachMovieLike;
