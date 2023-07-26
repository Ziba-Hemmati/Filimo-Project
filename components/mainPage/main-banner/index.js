"use client";
import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { PosterText } from "./PosterText";

const initialState = {
  text: [
    { title: "۸۵ هزار اپیزود فیلم و سریال برای تماشا داری" },
    { title: "می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی" },
    { title: "می‌تونی یک عضو، مخصوص تماشای کودک بسازی" },
  ],
  posters: [
    {
      banner:
        "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/tom-and-jerry-movie-review-2021/tom-and-jerry-movie-review-2021.jpeg",
    },
    {
      banner:
        "https://www.dreamworks.com/storage/cms-uploads/boss-baby-2-seo-share2.jpg",
    },
    {
      banner:
        "https://www.cnet.com/a/img/resize/53d20634fa25a0dc9de0bc2ea22c41992f1f1173/hub/2016/09/06/9d4d2ee9-22f3-4e84-9585-4da624aedb79/toddlerwatermoana2.jpg?auto=webp&width=1200",
    },
    {
      banner:
        "https://m.media-amazon.com/images/M/MV5BMTc5ODQzOTk0NV5BMl5BanBnXkFtZTgwODcwMDk4NTE@._V1_.jpg",
    },
  ],
};

export const MainBanner = (movie) => {
  const [state, setState] = useState(initialState);
  const movies = movie.movies;
  const selectedIds = [4, 6, 7, 0, 10, 11, 12];
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


        {movies
          .filter((item) => selectedIds.includes(item.id))
          .map((item, index) => {
            return (
              <div
                className="min-h-[70vh] w-full"
                key={index}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), #151515), url(${item.banner})`,
                }}
              >
                <PosterText data={state.text} />
              </div>
            );
          })}
      </Fade>
    </>
  );
};
