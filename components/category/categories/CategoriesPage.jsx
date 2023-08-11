"use client";
import Title from "@/components/Title";
import SubHeader from "@/components/category/subHeader/SubHeader";
import { useEffect, useState } from "react";
import {
  getSortedMovies,
  getTargetData,
} from "@/components/category/categories/getSortedMovies";
import CategoryPoster from "./CategoryPoster";

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
                <CategoryPoster
                  key={id}
                  id={id}
                  poster={poster}
                  rate={rate}
                  genre={genre}
                  year={year}
                  country={country}
                  isDub={isDub}
                  faName={faName}
                  isSub={isSub}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
