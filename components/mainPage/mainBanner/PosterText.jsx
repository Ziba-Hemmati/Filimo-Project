import React from "react";
import Items from "@/components/Items";

export const PosterText = () => {
  const text = [
    { title: "۸۵ هزار اپیزود فیلم و سریال برای تماشا داری" },
    { title: "می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی" },
    { title: "می‌تونی یک عضو، مخصوص تماشای کودک بسازی" },
  ];
  
  return (
    <>
      <div className="pt-10 md:pt-16 lg:pt-36 pb-16 text-center">
        <div className="pb-4">
          <p className="text-orange-400 text-base font-bold">
            با فیلیمو بی‌وقفه فیلم ببین
          </p>
        </div>

        <div className="pb-10">
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold text-white font-iran-sans-medium">
            !کنترل همیشه دست توست
          </p>
        </div>

        <div className="flex justify-center px-5" style={{ direction: "rtl" }}>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
            {text.map((item, index) => {
              return (
                <Items
                  className="sm:text-sm lg:text-[13px] xl:text-sm leading-5 font-bold"
                  key={index + 1}
                >
                  {item.title}
                </Items>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
