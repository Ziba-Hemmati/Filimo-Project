"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { PosterText } from "./PosterText";

function MainBannerSlider({ movies }) {
  const selectedIds = [47, 38, 33, 31, 28, 27, 25, 22, 12, 13];
  const shuffledIds = [...selectedIds];

  for (let i = shuffledIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIds[i], shuffledIds[j]] = [shuffledIds[j], shuffledIds[i]];
  }

  const mappedObjects = shuffledIds.map((id) => {
    return movies.find((obj) => obj.id === id);
  });
  
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 100,
    infinite: true,
    slidesToShow: 1,
  };

  return (
    <>
      <Fade {...settings} className="h-full">
        {mappedObjects.map((item, index) => {
          return (
            <div
              className="min-h-[70vh] w-full"
              key={index}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `radial-gradient(130% 44% at 41% 40%,rgba(0,0,0,0) 0,#151515 100%), url(${item.banner})`,
              }}
            >
              <div
                className=""
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `linear-gradient(186.97deg,rgba(21,21,21,0) 5.45%,#151515 94.55%)`,
                }}
              ></div>
              <div className="flex items-center justify-center">
                <PosterText />
              </div>
            </div>
          );
        })}
      </Fade>
    </>
  );
}

export default MainBannerSlider;
