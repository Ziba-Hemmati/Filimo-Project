"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../assets/css/swiperNavigation.css";

const FreeMoviesPosterItem = ({ data }) => {
  return (
    <Swiper
      spaceBetween={50}
      breakpoints={{
        300: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
      navigation
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
    >
      {data.map(({ id, poster, faName }) => (
          <SwiperSlide key={id}>
             <li className={"w-fit opacity-80 hover:opacity-100"}>
              <Link href={`/movies/${id}`}>
                 <img
                  className={"w-[130px] h-[175px] rounded-md md:w-[165px] md:h-[220px]"}
                   src={poster}
                   alt={faName}
                 />
                 <p className={"truncate text-white w-[130px] text-[0.8rem] mt-2 md:w-[165px]"}>
                 انیمیشن - {faName}
                 </p>
              </Link>
             </li>

          </SwiperSlide>
      ))}
  </Swiper>
   
  );
};

export default FreeMoviesPosterItem;