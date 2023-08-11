"use client";
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/css/swiperSuggestedMovies.css'

const SuggestedMoviesPoster = ({ moviesCategory }) => {
 
    return (
      <Swiper
      spaceBetween={8}
      breakpoints = {{
        200: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        300: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        400: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1100: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      }}
      navigation={{
        disabledClass: "swiper-button-disabled"
      }}
      modules={[Navigation]}
      className="swiper-suggestedmovies"
  >
      {moviesCategory.map(({ id, poster, faName, rate, genre, year, country }) => {
        return (
          <SwiperSlide key={id}>
              <div>
              <Link  href={`/movies/${id}`}>
                   <div className={"relative "}>
                     <img
                       className={"w-full h-[130px] rounded-md sm:w-full sm:h-[200px] sm2:h-[240px] md:h-[260px] lg:h-[300px]"}
                       src={poster}
                       alt={faName}
                     />
                     <div className={"bg-black-fade-600 top-0 right-0 opacity-0 w-full h-[130px] text-[0.7rem] absolute rounded-md sm:h-[200px] sm2:h-[240px] md:h-[260px] lg:h-[300px] hover:opacity-90 transition-all duration-300 "}>
                       <div className={"text-white absolute bottom-0"}>
                         <div className={"flex w-fit justify-between items-end mb-3 mr-1"}>
                           <span className={"text-[0.6rem] font-black rounded-tr-xl rounded-br-xl bg-gray-400 bg-opacity-[.8] w-fit p-[3px] pr-2 items-center"}>
                             IMDb
                           </span>
                           <span className={"text-[0.6rem] rounded-tl-xl rounded-bl-xl pl-2 bg-gray-400 bg-opacity-[.7] p-[3px]"}>
                             {rate}/10
                           </span>
                         </div>
                         <p className={"mb-3 mr-1"}>{genre}</p>
                         <p className={"mb-3 mr-1"}>
                           {year} - {country}
                         </p>
                       </div>
                     </div>
                     <p className={"truncate text-white text-[0.7rem] mt-4"}>
                       {faName}
                     </p>
                   </div>
                 </Link>
                 </div>

          </SwiperSlide>
          )
        })}
  </Swiper>

  );
};

export default SuggestedMoviesPoster;
