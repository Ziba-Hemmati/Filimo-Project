import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faCaretDown,
  faArrowUp,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FixedFooter = () => {
  return (
    <div>
      <div className="z-[2] text-gray-300 w-full text-[10px] fixed bottom-0 py-1  px-3 md:px-2 bg-black-700 overflow-x-auto lg:flex lg:justify-between lg:w-full ">
        <ul className="flex  items-center lg:w-3/4 ">
          <Link href="" className="hover:text-white transition lg:hidden ml-3 text-sm  ">
            <FontAwesomeIcon icon={faArrowUp} />
          </Link>
          <Link href="">
            <div className="flex items-center hover:text-white transition ml-4 lg:ml-5 ">
              <FontAwesomeIcon icon={faTv} className="pl-2 text-sm" />
              <li>تماشا با تلویزیون</li>
            </div>
          </Link>
          <Link href="">
            <li className="hover:text-white transition ml-4 lg:ml-5 ">اپلیکشن‌ها</li>
          </Link>
          <Link href="" className=" lg:hidden">
            <div className="flex items-center hover:text-white transition">
              <FontAwesomeIcon icon={faCaretDown} className="pl-1 text-sm " />
              <li>لینک‌های مفید</li>
            </div>
          </Link>
          <Link href="" className="lg:hidden">
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="hover:text-white transition absolute left-3 bottom-[7px] md:left-4 md:pr-[20rem] lg:pr-[30rem] text-sm "
            />
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition lg:ml-5 ">
              تماس با ما
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition lg:ml-5 ">
              قوانین
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition lg:ml-5 ">
              پشتیبانی
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition lg:ml-5 ">
              به ما بپویوندید
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition lg:ml-5 ">
              تبلیغات در فیلیمو
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition lg:ml-5 ">
              فروشگاه
            </li>
          </Link>
          <Link href="">
            <div className="hidden lg:flex lg:items-center hover:text-white transition">
              <FontAwesomeIcon icon={faCaretDown} className="pl-1 text-sm" />
              <li> سایر لینک‌ها</li>
            </div>
          </Link>
        </ul>
        <ul>
          <Link href="">
            <div className="hidden lg:flex lg:items-center  hover:text-white transition">
              <FontAwesomeIcon icon={faCaretDown} className="pl-1 text-sm" />
              <li>شبکه‌های اجتماعی</li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FixedFooter;
