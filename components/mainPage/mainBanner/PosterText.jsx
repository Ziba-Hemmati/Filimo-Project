"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Items from "@/components/Items";

export const PosterText = (data) => {
  const texts = data.data;
  return (
    <>
      <div className="pt-44 pb-16 text-center">
        <div className="pb-4">
          <p className="text-[#f89f3e] text-base font-bold">
            با فیلیمو بی‌وقفه فیلم ببین
          </p>
        </div>

        <div className="pb-4">
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold text-white font-iran-sans-medium">
            !کنترل همیشه دست توست
          </p>
        </div>

        <div className="flex justify-center" style={{ direction: "rtl" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {texts.map((item, index) => {
              return <Items key={index}>{item.title}</Items>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
