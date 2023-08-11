import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "assets/css/swiperStyle.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Title from "@/components/Title";

const EachMovieModal = ({ album, onClose, faName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="text-white fixed flex flex-col items-center w-screen h-screen top-0 right-0 z-10">
      <div
        className={"w-full h-full bg-black opacity-95 absolute top-0 right-0"}
      ></div>

      <button
        className={
          "top-2 right-[50%] translate-x-1/2 sm:top-8 sm:right-8 absolute w-7 h-7 flex justify-center items-center"
        }
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faClose} className={"w-full text-xl h-full"} />
      </button>
      <Title className={"z-10 mt-12 sm:mt-8"}>{faName}</Title>
      <div
        className={
          "w-full h-full flex flex-col items-center justify-around relative"
        }
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={
            "mySwiper2 mb-5 w-[90%] h-[50%] sm:w-[75%] sm:h-[50%] md:w-[60%] md:h-[50%] lg:w-[50%] lg:h-[50%]"
          }
        >
          {album.map((image) => (
            <SwiperSlide key={image} className={"w-full h-full"}>
              <img
                src={image}
                alt={"Can not load this picture"}
                className={"w-full h-full object-cover"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={album.length}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] "
        >
          {album.map((image) => (
            <SwiperSlide key={image} className={""}>
              <img
                src={image}
                alt={"Can not load this picture"}
                className={"w-full h-full"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EachMovieModal;
