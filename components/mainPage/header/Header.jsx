"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faFireFlameCurved,
  faHorse,
  faPlay,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:flex xl:justify-center bg-black-950 bg-opacity-[.7] sticky top-0">
      <div className="items-center lg:p-2 md:pr-6 md:pl-6   lg:flex  lg:pr-14 lg:pl-14 ">
        <div>
          <img
            className="h-5 hidden lg:inline xl:h-7"
            src="	https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/filimo/fa-filimo-dark-logo.png"
            alt="logo"
          />
          <span className="border h-6 border-gray-300 mr-6 hidden lg:inline"></span>
        </div>
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="flex justify-between items-center p-2 md:pr-6 md:pl-6 lg:pl-0  lg:pr-0">
            <img
              className="h-5 lg:hidden"
              src="	https://www.filimo.com/assets/web/ui/img-ynsexKiWcOkSOPureyAnA/filimo/fa-filimo-dark-logo.png"
              alt="logo"
            />
            <input
              id="search"
              type="text"
              placeholder="جست و جو ..."
              className=" bg-black-700 w-3/5 placeholder:text-xs placeholder:p-2 rounded focus:outline-none text-orange-600 xl:p-1.5"
            />
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-2xl text-white md:text-base md:pl-2 lg:pl-2 lg:pr-2 xl:text-[1.5rem] "
              />
              <p className=" hidden md:inline text-gray-200 text-xs lg:text-[.6rem] xl:text-xs ">
                لیست های من
              </p>
            </div>
          </div>
          <div>
            <ul className="flex justify-between items-center p-2 pt-4 overflow-x-auto text-gray-200 text-xs md:pr-6 md:pl-6 xl:text-sm xl:ml-36">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faFireFlameCurved}
                  className="text-base text-orange-600 pl-2 pb-2.5"
                />
                <li className="pb-2.5 pl-8">فیلیموتور</li>
              </div>

              <button
                className="pb-2.5 pl-8"
                onMouseOver={() => setIsOpen((prev) => !prev)}
                onMouseOut={() => setIsOpen((prev) => !prev)}
              >
                فیلم
              </button>
              {isOpen && (
                <div className="absolute top-20 right-32">
                  <p>درام</p>
                  <p>اکشن</p>
                  <p>انیمیشن</p>
                  <p>کمدی</p>
                  <p>ماجراجویی</p>
                </div>
              )}

              <li className="pb-2.5 pl-8">سریال</li>
              <li className="pb-2.5 pl-8">ایرانی</li>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faHorse}
                  className="text-base text-white pl-2 pb-2.5"
                />
                <li className="pb-2.5 pl-8">کودک</li>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-base text-white pl-2 pb-2.5"
                />
                <li className="pb-2.5 pl-8">فیلیمومدرسه</li>
              </div>
              <div className="flex items-center">
                <li className="pb-2.5 pl-1">مجموعه‌ها</li>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-xs  pb-2.5 pl-8 lg:pl-0 md:pl-0"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
