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

const Menu = ({ categories }) => {
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
      <ul className="flex transition-all transition-100  justify-between items-center lg:py-2 p-2 md:px-0 overflow-x-auto text-gray-200 text-xs">
        <div className="flex items-center hover:text-orange-600">
          <FontAwesomeIcon
            icon={faFireFlameCurved}
            className="text-base pl-2"
          />
          <li className="pl-8 transition-colors duration-300 cursor-pointer">
            فیلیموتور
          </li>
        </div>
        <div>
          <Link
            href={"/movies"}
            className=" hover:text-orange-600"
            onMouseOver={handleOver}
            onMouseLeave={handleLeave}
          >
            <li className="flex items-center">
              <span className=" md:pl-0 transition-colors duration-300 cursor-pointer">
                فیلم
              </span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="pr-1 hidden md:inline pl-8 pb-0"
              />
            </li>
          </Link>
          <Transition in={isOver} timeout={300} mountOnEnter unmountOnExit>
            {(state) => (
              <div
                onMouseOver={handleOver}
                onMouseLeave={handleLeave}
                className={`hidden lg:flex lg:flex-col px-4 lg:absolute lg:top-[56px] bg-black-850 w-32 rounded-[4px] transition-transform transform ${
                  state === "entered"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-8px]"
                }`}
              >
                {categories.map(({ id, faName, enName }) => {
                  return (
                    <Link
                      key={id}
                      href={`/tag/${enName}`}
                      className="my-4 hover:text-orange-600 transition-colors duration-300 "
                    >
                      {faName}
                    </Link>
                  );
                })}
              </div>
            )}
          </Transition>
        </div>
        <div className="flex items-center hover:text-orange-600">
          <li className="pl-1 transition-colors duration-300 cursor-pointer">
            سریال
          </li>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-xs hidden md:inline pl-8 lg:pl-8 md:pl-0"
          />
        </div>
        <div className="flex items-center">
          <li className="pl-8 hover:text-orange-600 transition-colors duration-300 cursor-pointer">
            ایرانی
          </li>
        </div>
        <div className="flex items-center hover:text-orange-600 transition-colors duration-300 cursor-pointer">
          <FontAwesomeIcon
            icon={faHorse}
            className="text-base pl-2 text-white hover:text-orange-600 "
          />
          <li className="pl-8">کودک</li>
        </div>
        <div className="flex items-center hover:text-orange-600 transition-colors duration-300 cursor-pointer">
          <FontAwesomeIcon
            icon={faPlay}
            className="text-base pl-2 text-white hover:text-orange-600"
          />
          <li className="pl-8">فیلیمومدرسه</li>
        </div>
        <div className="flex items-center hover:text-orange-600 transition-colors duration-300 cursor-pointer">
          <li className="pl-1">مجموعه‌ها</li>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-xs lg:pl-0 md:pl-0 xl:ml-[6rem]"
          />
        </div>
      </ul>
    </>
  );
};

export default Menu;
