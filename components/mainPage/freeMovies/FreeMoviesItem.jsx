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
      spaceBetween={25}
      breakpoints={{
        300: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 3,
        },
        650: {
          slidesPerView: 4,
        },
        800: {
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
      className="swiper-freemovies"
    >
      {data.map(({ id, poster, faName }) => (
          <SwiperSlide key={id}>
             <li className={"w-full opacity-80 hover:opacity-100"}>
              <Link href={`/movies/${id}`}>
                 <img
                  className={"w-full h-[220px] rounded-md sm:h-[240px] md:w-[170px] md:h-[220px]"}
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