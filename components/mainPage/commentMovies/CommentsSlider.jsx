// components/CommentSlider.js
'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import avatar from'@/assets/virgol.png'
import { Autoplay,Navigation } from 'swiper/modules';

const comments = [
    {
        id: 1,
        username: 'user1',
        comment: '',
    },
    {
        id: 2,
        username: 'user2',
        comment: 'کامنت ',
    },
    {
        id: 3,
        username: 'user3',
        comment: ' کامنت',
    },
    {
        id: 4,
        username: 'user4',
        comment: 'کامنت',
    },
    {
        id: 5,
        username: 'user5',
        comment: 'کامنت',
    },
    {
        id: 6,
        username: 'user6',
        comment: 'کامنت',
    },
];

const CommentSlider = () => {
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
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay,Navigation]}
        >

            {comments.map((comment) => (
                <SwiperSlide key={comment.id}>
                    <div className="h-[20vh] p-4 bg-black-850 rounded-xl border border-gray-400 cursor-pointer">
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center py-2'>
                                <FontAwesomeIcon icon={faUserCircle} className='text-gray-500 text-xl'/>
                                <p className="text-gray-400 pr-2">{comment.username}</p>
                            </div>
                            <Image className="ml-4" src={avatar}/>
                        </div>
                        <div>
                            <span className="text-gray-200 pb-6 text-xs">{comment.comment}</span>
                        </div>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CommentSlider;
