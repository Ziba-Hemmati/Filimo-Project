import Link from "next/link";
import ImdbRate from "../ImdbRate";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faThumbsUp,
  faThumbsDown,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "@/redux/features/likeSlice";
import { setBookmark } from "@/redux/features/bookMarkSlice";

const SelectedMovie = ({
  id,
  poster,
  rate,
  genre,
  year,
  country,
  isDub,
  faName,
  isSub,
  bookmark,
}) => {
  const likedItem = bookmark.find((item) => item.id == id);

  const likeState = useSelector((store) => store.like);
  const thumbsUp = likeState.find((item) => item.id == id);
  const dispatch = useDispatch();

  return (
    <div>
      <div key={id} className="relative">
        <Link href={`/movies/${id}`}>
          <img className="w-full h-full rounded-[4px]" src={poster} />
          <div className="bg-black-fade-600 opacity-0 absolute bottom-0 right-0 w-full h-full hover:opacity-90 transition-all duration-300 ">
            <div className="absolute bottom-0">
              <ImdbRate rate={rate} className={"bg-gray-500 mb-2"} />
              <p className="mb-3 mr-1">{genre}</p>
              <p className="mb-3 mr-1">
                {year} - {country} {isDub && " - دوبله شده "}
                {isSub && " - زیر نویس دارد "}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <p className="truncate my-4">{faName}</p>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="text-sm text-gray-200 hover:bg-gray-600 rounded-[50%] px-[11px] py-[6px] transition-all duration-200 "
        />
      </div>

      <div className="bg-orange-300 p-4 w-fit rounded-[4px]">
        <div
          className={`mb-4 ${thumbsUp && "border"}`}
          onClick={() => dispatch(setLike(likedItem))}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <span> دوست داشتم </span>
        </div>
        <div
          className={`mb-4 ${!thumbsUp && "border"}`}
          onClick={() => dispatch(setLike(likedItem))}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
          <span> دوست نداشتم </span>
        </div>
        <div onClick={() => dispatch(setBookmark(likedItem))}>
          <FontAwesomeIcon icon={faCircleMinus} />
          <span> حذف از لیست </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
