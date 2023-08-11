import {
  faFireFlameCurved,
  faHorse,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import MoviesList from "./MoviesList";

const Menu = ({ data }) => {
  const categories = data.categories;

  return (
    <ul className="text-gray-200 flex items-center justify-between px-[10px] text-[.7rem] overflow-x-auto pb-3 md:px-5 lg:p-0 md:overflow-hidden">
      <li className="ml-8">
        <Link
          href={"/"}
          className="flex items-center hover:text-orange-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faFireFlameCurved} className="ml-2 text-sm" />
          <span> فیلیموتور</span>
        </Link>
      </li>
      <li className="ml-8">
        <MoviesList categories={categories} />
      </li>
      <li className="ml-8">
        <Link
          href={"/"}
          className="hover:text-orange-400 transition-colors duration-300"
        >
          سریال
        </Link>
      </li>
      <li className="ml-8">
        <Link
          href={"/"}
          className="hover:text-orange-400 transition-colors duration-300"
        >
          ایرانی
        </Link>
      </li>
      <li className="ml-8">
        <Link
          href={"/"}
          className="flex items-center hover:text-orange-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faHorse} className="ml-2 text-sm" />
          کودک
        </Link>
      </li>
      <li className="ml-8">
        <Link
          href={"/"}
          className="flex items-center hover:text-orange-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faPlay} className="ml-2 text-sm" /> فیلیمومدرسه
        </Link>
      </li>
      <li className="">
        <Link
          href={"/"}
          className="hover:text-orange-400 transition-colors duration-300"
        >
          مجموعه‌ها
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
