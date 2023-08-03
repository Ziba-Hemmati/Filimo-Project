'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper/modules';
import "./swiper.css"
const BannerSlider = ({ banners, enName }) => {
  return (
    <Swiper
      slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="max-h-[70vh] w-full">
            <img src={banner} alt={enName} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;