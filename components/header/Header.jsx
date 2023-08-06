import {
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Menu from "./Menu";
import Search from "./Search";
import { getLocalData } from "@/lib/localdata";

const Header = async () => {
  const data = await getLocalData();
  const movies = data.movies;

  return (
    <nav className="py-[3px] bg-black bg-opacity-[.9] sticky top-0 z-[2] w-full">
      <div className="px-[10px] flex justify-between items-center my-3 md:px-[20px] xl:px-[100px]">
        <div className="flex items-center justify-center">
          <Link href={"/"} className="flex">
            <img
              src="https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/filimo/fa-filimo-dark-logo.png"
              alt="logo-filimo"
              className="w-[67px] sm:w-[75px] md:[80px] "
            />
            <div className="border border-gray-200 mx-4 lg:mx-8 hidden lg:inline"></div>
          </Link>
          <div className="hidden lg:inline">
            <Menu />
          </div>
        <Search movies={movies} />
        </div>
        <div className="flex items-center">
          <div className=""></div>
          <div className="text-white hover:text-orange-600">
            <Link
              href={"/bookmark"}
              className="flex items-center transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faCirclePlus} className="ml-1" />
              <span className="hidden md:inline text-[.6rem] lg:text-[.7rem] ">لیست‌های من</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
