"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faClose } from "@fortawesome/free-solid-svg-icons";
import { setBookmark } from "@/redux/features/bookMarkSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useCallback, useState } from "react";

const WatchLater = ({ target }) => {
  const bookmark = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();
  const isExist = bookmark.find((item) => {
    return item.id == target.id;
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
          className={`md:flex items-center md:bg-gray-250 md:hover:bg-gray-200 md:hover:bg-opacity-[.3] transition-colors duration-300 md:bg-opacity-[.2] md:px-3 md:py-2 rounded-3xl ${
            isExist &&
            "text-orange-400 md:outline outline-2 outline-orange-400 md:hover:bg-orange-300 md:hover:bg-opacity-[1] hover:text-black"
          }`}
          onClick={() => dispatch(setBookmark(target))}
        >
          <FontAwesomeIcon icon={faBookmark} />
          <div className="md:mr-1 text-[11px]">بعدا میبینم</div>
        </button>
      {/* </div> */}
      {/* {toggle
        ? isExist && (
            <div className="absolute left-3 top-[102px] md:top-[458px] lg:top-[430px] xl:top-[462px] xl2:top-[472px] md:left-8 xl:left-[178px] bg-green-500 p-4 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faClose}
                className="ml-2 hover:text-black text-lg transition-colors duration-300"
                onClick={() => setToggle(false)}
              />
              <p>به لیست "بعدا میبینم" اضافه شد.</p>
            </div>
          )
        : ""}
      {toggle
        ? isExist === undefined && (
            <div className="absolute  left-3 top-[102px] md:top-[458px] lg:top-[430px] xl:top-[462px] xl2:top-[472px] md:left-8 xl:left-[178px] bg-red-500 p-4 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faClose}
                className="ml-2 hover:text-black text-lg transition-colors duration-300"
                onClick={() => setToggle(false)}
              />
              <p>از لیست "بعدا میبینم" حذف شد.</p>
            </div>
          )
        : ""} */}
    </>
  );
};

export default WatchLater;
