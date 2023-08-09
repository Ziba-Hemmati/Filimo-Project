"use client";
import Title from "@/components/Title";
import Link from "next/link";
import SubHeader from "@/components/category/subHeader/SubHeader";
import { Suspense, useEffect, useState } from "react";
import {
  getSortedMovies,
  getTargetData,
} from "@/components/category/categories/getSortedMovies";

const CategoriesPage = ({ eachCategory, data }) => {
  const [selectedOption, setSelectedOption] = useState();
  const [shownMovies, setShownMovies] = useState([]);

  useEffect(() => {
    const getInitData = () => {
      const movies = data.movies;
      const targetMovies = getTargetData(eachCategory, movies);
      setShownMovies(targetMovies);
    };

    getInitData();
  }, []);

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    const sortedMovies = getSortedMovies(option.type, shownMovies);
    setShownMovies(sortedMovies);
  };

  const categories = data.categories;
  const categoryName = categories.find((category) => {
    return category.enName === eachCategory;
  });
  const { faName } = categoryName;

  return (
    <>
      <SubHeader
        faName={faName}
        selectedOption={selectedOption}
        onSelect={handleSelectedOption}
      />
      <div className="mb-20">
        <div className="m-[14px] lg:mr-[30px] ">
          <Title> {faName} </Title>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-2 lg:gap-3 gap-y- sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-white p-[14px] text-[.7rem] lg:px-[30px]">
          {shownMovies.map(
            ({
              id,
              poster,
              rate,
              genre,
              year,
              country,
              isDub,
              faName,
              isSub,
            }) => {
              return (
                <div key={id}>
                  <div key={id} className="relative">
                    <Link href={`/movies/${id}`}>
                      <img
                        className="w-full h-full rounded-[4px]"
                        src={poster}
                      />
                      <div className="bg-black-fade-600 opacity-0 absolute bottom-0 right-0 w-full h-full hover:opacity-90 transition-all duration-300 ">
                        <div className="absolute bottom-0">
                          <div className="flex items-end mr-1 mb-2">
                            <div className="font-bold bg-gray-300 rounded-tr-xl rounded-br-xl py-[3.2px] pr-2 pl-1 bg-opacity-[.6] text-[.6rem] ">
                              IMDb
                            </div>
                            <div className="bg-gray-800 rounded-tl-xl rounded-bl-xl py-[2px] pl-2 pr-1 bg-opacity-[.6]">
                              {rate}/10
                            </div>
                          </div>
                          <p className="mb-3 mr-1">{genre}</p>
                          <p className="mb-3 mr-1">
                            {year} - {country} {isDub && " - دوبله شده "}
                            {isSub && " - زیر نویس دارد "}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <p className="truncate my-4">{faName}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
