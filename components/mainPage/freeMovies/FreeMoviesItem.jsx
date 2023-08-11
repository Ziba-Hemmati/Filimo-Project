"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import '../../../assets/css/swiperFreeMovies.css'

const FreeMoviesPosterItem = ({ data }) => {
  return (
    <Swiper
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        440: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        650: {
          slidesPerView: 4,
         spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
        1000: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1350: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
      navigation
      modules={[Autoplay, Navigation]}
      className="swiper-freemovies"
    >
      {data.map(({ id, poster, faName }) => (
          <SwiperSlide key={id}>
             <li className={"w-full opacity-80 hover:opacity-100"}>
              <Link href={`/movies/${id}`}>
                 <img
                  className={"w-full h-[210px] rounded-lg sm:h-[205px] sm2:h-[220px] md:h-[190px] lg2:w-[165px] lg2:h-[225px]"}
                   src={poster}
                   alt={faName}
                 />
                 <p className={"truncate text-white text-[0.8rem] mt-2"}>
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