"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const PosterText = (data) => {
  const texts = data.data;
  return (
    <>
      <div className="pt-80 pb-16 text-center">
        <div className="pb-8">
          <p className="text-[#f89f3e] text-sm font-bold">
            با فیلیمو بی‌وقفه فیلم ببین
          </p>
        </div>

        <div className="pb-8">
          <p className="text-3xl font-bold text-white">!کنترل همیشه دست توست</p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {texts.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-center">
                  <p className="text-[rgba(255,255,255,.75)]">{item.title}</p>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 p-1 bg-green-800 rounded-full ml-2"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
