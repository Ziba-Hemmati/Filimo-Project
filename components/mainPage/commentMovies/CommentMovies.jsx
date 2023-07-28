
import React from 'react';
import CommentSlider from "@/components/mainPage/commentMovies/CommentsSlider";

const CommentMovies = () => {
    return (
        <div className="p-2 lg:p-8 lg:w-[85%] mx-auto">
            <h3 className='text-white mb-5 font-iran-sans-medium font-bold'>نظر کاربران بعد از تماشای فیلیمو</h3>
            <CommentSlider />
        </div>
    );
};

export default CommentMovies;