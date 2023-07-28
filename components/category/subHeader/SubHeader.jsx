"use client";
import React, { useState } from "react";

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

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

  return (
    <>
      <div className="bg-black-950 bg-opacity-[.7] sticky top-[74px] sm:top-[71px] md:top-[72px] lg:top-[56px] xl:top-[55px] z-10 py-3">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <p className="text-white text-sm md:text-lg">دسته بندی‌ها</p>
            </div>

            <div className="relative">
              <button
                className="w-full text-white bg-transparent hover:bg-[#505050] text-xs flex items-center justify-center px-2 py-1 rounded border border-gray-500 focus:outline-none focus:border-orange-400"
                onClick={toggleDropdown}
              >
                {selectedOption ? selectedOption.label : "مرتب سازی"}
                <img
                  className="pr-3"
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
