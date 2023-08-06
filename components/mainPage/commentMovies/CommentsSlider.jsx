'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "./swiperComment.css"
import {Autoplay, Navigation} from 'swiper/modules';
import Comments from './Comments.jsx'
const CommentSlider = ({ movie }) => {
    return (
        <Swiper
            spaceBetween={10}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            loop
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
        >
          {movie.map(({ id, comments, faName }) => {
        const lastComment = comments[comments.length - 1];  
        return (
            <SwiperSlide key={id} className="pt-10">
                <Comments comment={lastComment} faName={faName} />
            </SwiperSlide>
        );
    })}
        </Swiper>
    );
};

export default CommentSlider;