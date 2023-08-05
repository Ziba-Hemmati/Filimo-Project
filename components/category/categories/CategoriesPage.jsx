"use client";
import Title from "@/components/Title";
import Link from "next/link";
import ImdbRate from "@/components/ImdbRate";
import SubHeader from "@/components/category/subHeader/SubHeader";
import { useCallback, useEffect, useState } from "react";
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
    console.log("sort: ", sortedMovies);
    setShownMovies(sortedMovies);
  };
  console.log("show: ", shownMovies);
  // const categories = data.categories;
  //
  // const category = movies.map((movie) => movie);
  // const targetMovies = category.filter((target) => {
  //   return target.category == eachCategory;
  // });
  // console.log();
  // const categoriesName = categories.map((category) => category);
  //
  // const categoryName = categoriesName.find((category) => {
  //   return category.enName == eachCategory;
  // });
  // const { genre } = categoryName;
  // const { faName } = categoryName;
  return (
    <>
      <SubHeader
        selectedOption={selectedOption}
        onSelect={handleSelectedOption}
      />
      <div>
        <div className="m-[14px] lg:mr-[30px] ">
          {/*<Title> {faName} </Title>*/}
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
                          <ImdbRate
                            rate={rate}
                            className={"bg-gray-500 mb-2"}
                          />
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
            },
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
