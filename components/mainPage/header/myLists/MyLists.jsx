import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MyLists = () => {
  return (
    <>
      <Link href="/bookmark" className="flex items-center">
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="text-2xl md:text-base md:pl-2 lg:pl-2 lg:pr-2 text-white"
        />
        <div className="hidden md:inline text-xs lg:text-[.6rem] xl:text-xs text-gray-200">
          لیست های من
        </div>
      </Link>
    </>
  );
};

export default MyLists;
