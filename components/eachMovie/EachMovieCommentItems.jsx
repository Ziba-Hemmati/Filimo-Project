import React from "react";

const EachMovieCommentItems = ({ name, date, text }) => {
  return (
      <div className="py-4 border-t border-[#333]">
        <div className="flex items-start">
          <div>
            <div className="bg-[#afb42b] text-white w-8 h-8 rounded-full flex items-center justify-center">
              <p className="text-center text-lg">U</p>
            </div>
          </div>

        <div className="px-3">
          <div className="flex pb-3">
            <p className="text-[#D0D0D0] font-semibold text-xs">{name}</p>
            <p className="text-[#BDBDBD] text-xs px-3">{date}</p>
          </div>
          <p className="text-[#f6f6f6] text-[10px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default EachMovieCommentItems;
