'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import "./swiperCustom.css"
const BannerSlider = ({ banners, enName }) => {
  return (
    <Swiper
        className="banner-swiper"
      slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation,Autoplay]}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="lg:max-h-[66vh] w-full">
            <img src={banner} alt={enName} className="h-[55vh] md:h-[100vh] w-full "/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
