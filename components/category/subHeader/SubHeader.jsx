"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

const SubHeader = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const scrolltopRef = useRef(0);
  const subHeaderRef = useRef(null);

  const options = [
    { label: "امتیاز IMDB", value: "امتیاز IMDB" },
    { label: "جدیدترین (سال ساخت)", value: "جدیدترین (سال ساخت)" },
    { label: "قدیمی‌ترین (سال ساخت)", value: "قدیمی‌ترین (سال ساخت)" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     const subHeaderOffset = subHeaderRef.current.offsetTop;

  //     if (offset > 40 && offset < scrolltopRef.current) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }

  //     scrolltopRef.current = offset <= 40 ? 40 : offset;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 40 && currentScrollY < prevScrollY) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        //  ref={subHeaderRef}
        id="subHeader"
        className={`sticky z-50 py-3 px-10 bg-black-850 top-[74px] sm:top-[71px] md:top-[72px] lg:top-[56px] xl:top-[55px] ${
          isSticky ? "bg-black-950 opacity-[0.7] border-t border-white" : ""
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <p className="text-white text-sm md:text-lg">
                {children ? children : "دسته بندی‌ها"}
              </p>
            </div>

            <div className="relative">
              <button
                className="w-full text-white bg-transparent hover:bg-[#505050] text-xs flex items-center justify-center px-2 py-1 rounded border border-gray-500 focus:outline-none focus:border-orange-400"
                onClick={toggleDropdown}
              >
                {selectedOption ? selectedOption.label : "مرتب سازی"}
                <img
                  className="mr-3 w-3"
                  src={`${
                    isOpen ? "/icons/arrow-up.png" : "/icons/arrow-down.png"
                  }`}
                />
              </button>
              {isOpen && (
                <ul className="absolute z-10 w-28 xl:w-36 mt-2 py-1 bg-black-950 text-white rounded shadow-lg">
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className="px-2 py-2 cursor-pointer text-[10px] hover:text-orange-400"
                      onClick={() => selectOption(option)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
