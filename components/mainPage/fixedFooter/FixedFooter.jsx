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
      <div className="z-10 text-gray-300 w-full text-[.7rem] fixed bottom-0 p-1 md:px-4 bg-black-700 overflow-x-auto lg:flex lg:justify-between lg:w-full ">
        <ul className="flex justify-between items-center lg:w-3/4 ">
          <Link href="" className="hover:text-white transition lg:hidden">
            <FontAwesomeIcon icon={faArrowUp} />
          </Link>
          <Link href="">
            <div className="flex items-center hover:text-white transition">
              <FontAwesomeIcon icon={faTv} className="pl-1" />
              <li>تماشا با تلویزیون</li>
            </div>
          </Link>
          <Link href="">
            <li className="hover:text-white transition">اپلیکشن‌ها</li>
          </Link>
          <Link href="" className=" lg:hidden">
            <div className="flex items-center hover:text-white transition">
              <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
              <li>لینک‌های مفید</li>
            </div>
          </Link>
          <Link href="" className="lg:hidden">
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="hover:text-white transition absolute left-1 bottom-[7px] md:left-4 md:pr-[20rem] lg:pr-[30rem] "
            />
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition">
              تماس با ما
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition">
              قوانین
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition">
              پشتیبانی
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition">
              به ما بپویوندید
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition">
              تبلیغات در فیلیمو
            </li>
          </Link>
          <Link href="">
            <li className="hidden lg:inline hover:text-white transition">
              فروشگاه
            </li>
          </Link>
          <Link href="">
            <div className="hidden lg:flex lg:items-center hover:text-white transition">
              <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
              <li> سایر لینک‌ها</li>
            </div>
          </Link>
        </ul>
        <ul>
          <Link href="">
            <div className="hidden lg:flex lg:items-center  hover:text-white transition">
              <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
              <li>شبکه‌های اجتماعی</li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FixedFooter;
