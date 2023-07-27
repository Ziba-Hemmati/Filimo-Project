"use client";
import { useState } from "react";

const Movies = ({ movie }) => {
  // const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-white p-[10px] ">
        {movie.map(({ poster, id, faName, genre, year, country, isDub }) => {
          return (
            <div key={id} className=" min-h-[200px]">
              <div className="relative">
                <img
                  className="w-full h rounded-[4px] p-[5px]"
                  src={poster}
                  // onMouseOver={() => setIsShow((prev) => !prev)}
                />
                <p className="text-[.7rem]">{faName}</p>
                <div className="bg-black-950 opacity-0 absolute top-0 right-0 w-full h-full ">
                  <p>{genre}</p>
                  <p>
                    {year} - {country} {isDub && " - دوبله شده"}
                  </p>
                </div>

                {/* {isShow && (
                  <div
                    key={id}
                    className="bg-black-600 bg-opacity-[.6] absolute w-[100%] h-[100%] z-10 top-[5px] right-[5px] text-[.7rem] "
                  >
                    <div className="absolute bottom-[30px]">
                      <p>{genre}</p>
                      <p>
                        {year} - {country} {isDub && " - دوبله شده"}
                      </p>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
