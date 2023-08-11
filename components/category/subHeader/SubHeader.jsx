"use client";
import React, { useEffect, useState } from "react";

const SubHeader = ({ faName, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const options = [
    {
      type: "default",
      label: "پیشفرض",
      value: "پیشفرض",
    },
    {
      type: "imdbRate",
      label: "امتیاز IMDB",
      value: "امتیاز IMDB",
    },
    {
      type: "newest",
      label: "جدیدترین (سال ساخت)",
      value: "جدیدترین (سال ساخت)",
    },
    {
      type: "oldest",
      label: "قدیمی‌ترین (سال ساخت)",
      value: "قدیمی‌ترین (سال ساخت)",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {

      const screenWidth = window.innerWidth;

      if (screenWidth > 768) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 40) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div id="subHeader" className={`z-[1] py-3 top-[82px] lg:top-[53px] ${
          isSticky ? "bg-black-950 bg-opacity-[0.7] border-t border-gray-700 sticky " : ""
      }`}>
      <div className="px-[14px] lg:px-[30px]">
        <div className="flex justify-between">
          <div>
            <p className="text-white text-sm md:text-lg">
              {faName ? faName : "دسته بندی‌ها"}
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
              <ul className="absolute z-10 w-[118px] mt-2 py-1 bg-black-950 text-white rounded shadow-lg">
                {options.map((option) => (
                  <li
                    key={option.value}
                    className="px-2 py-2 cursor-pointer text-[8px] hover:text-orange-400"
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
  );
};

export default SubHeader;
