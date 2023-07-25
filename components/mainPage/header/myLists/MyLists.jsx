import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MyLists = () => {
  return (
    <>
      <Link href="" className="flex items-center text-white hover:text-orange-600">
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="text-2xl md:text-base md:pl-2 lg:pl-2 lg:pr-2"
        />
        <p className=" hidden md:inline text-gray-200 text-xs lg:text-[.6rem] xl:text-xs">
          لیست های من
        </p>
      </Link>
    </>
  );
};

export default MyLists;
