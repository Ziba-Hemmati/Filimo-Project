"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faHorse,
  faPlay,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import { Transition } from "react-transition-group";

// *******************************************************************************

const Menu = () => {
  const [isOver, setIsOver] = useState(false);
  const menuTimeout = useRef(null);

  const handleOver = () => {
    clearTimeout(menuTimeout.current);
    setIsOver(true);
  };

  const handleLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setIsOver(false);
    }, 200);
  };
  return (
    <>
      <ul className="flex transition-all transition-100  justify-between items-center p-2 pt-4 overflow-x-auto text-gray-200 text-xs md:px-6 ">
        <div className="flex items-center hover:text-orange-600">
          <FontAwesomeIcon
            icon={faFireFlameCurved}
            className="text-base pl-2 pb-2.5"
          />
          <li className="pb-2.5 pl-8">فیلیموتور</li>
        </div>
        <div>
          <div
            className="flex items-center hover:text-orange-600"
            onMouseOver={handleOver}
            onMouseLeave={handleLeave}
          >
            <li className="pb-2.5 flex items-center">
              <span className="pl-8 md:pl-0">فیلم</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="pr-1 hidden md:inline pl-8"
              />
            </li>
          </div>
          <Transition in={isOver} timeout={300} mountOnEnter unmountOnExit>
            {(state) => (
              <div
                onMouseOver={handleOver}
                onMouseLeave={handleLeave}
                className={`hidden lg:flex lg:flex-col p-4 lg:absolute lg:top-[66px] bg-black-850 w-32 rounded-lg transition-transform transform ${
                  state === "entered"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-8px]"
                }`}
              >
                <Link href="" className="mt-1 hover:text-orange-600">
                  درام
                </Link>
                <Link href="" className="mt-8 hover:text-orange-600">
                  اکشن
                </Link>
                <Link href="" className="mt-8 hover:text-orange-600">
                  انیمیشن
                </Link>
                <Link href="" className="mt-8 hover:text-orange-600">
                  کمدی
                </Link>
                <Link href="" className="mt-8 hover:text-orange-600 mb-2">
                  ماجراجویی
                </Link>
              </div>
            )}
          </Transition>
        </div>
        <div className="flex items-center pl-8 hover:text-orange-600">
          <li className="pb-2.5 pl-1">سریال</li>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-xs hidden md:inline pb-2.5 pl-8 lg:pl-0 md:pl-0"
          />
        </div>
        <li className="pb-2.5 pl-8 hover:text-orange-600">ایرانی</li>
        <div className="flex items-center hover:text-orange-600">
          <FontAwesomeIcon
            icon={faHorse}
            className="text-base pl-2 pb-2.5  text-white hover:text-orange-600 "
          />
          <li className="pb-2.5 pl-8">کودک</li>
        </div>
        <div className="flex items-center hover:text-orange-600">
          <FontAwesomeIcon
            icon={faPlay}
            className="text-base pl-2 pb-2.5 text-white hover:text-orange-600"
          />
          <li className="pb-2.5 pl-8">فیلیمومدرسه</li>
        </div>
        <div className="flex items-center hover:text-orange-600">
          <li className="pb-2.5 pl-1">مجموعه‌ها</li>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-xs  pb-2.5 lg:pl-0 md:pl-0 xl:ml-[6rem]"
          />
        </div>
      </ul>
    </>
  );
};

export default Menu;
