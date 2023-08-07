"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

const Search = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const searchByFaName = useCallback((search) => {
    return movies.filter((item) => item.faName.includes(search));
  }, []);

  const SEARCH_Movie = useMemo(() => {
    return searchByFaName(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    //Debounce search by faName
    const timer = setTimeout(() => {
      SEARCH_Movie;
    }, 1000);
    //clean up
    return () => {
      clearTimeout(timer);
    };
  }, [SEARCH_Movie]);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={handleOpen}
        className="text-white transition-colors duration-300 hover:text-orange-400 mr-4 cursor-pointer lg:mr-7"
      />

      {isOpen && (
        <div
          className="absolute top-0 right-0 bg-black-950 bg-opacity-[.9] w-full h-screen flex flex-col items-center"
          onClick={handleOpen}
        >
          <input
            type="text"
            placeholder="براساس نام فارسی جستجو کنید..."
            value={searchTerm}
            onChange={handleChange}
            className="my-10 outline-none rounded-sm placeholder:text-[.7rem] placeholder:lg:text-[.8rem] bg-gray-600 w-[280px] lg:w-[720px] p-2 text-orange-400 text-sm"
            onClick={handleOpen}
          />
          <div className="overflow-y-auto w-[280px] lg:w-[720px] pb-10">
            {searchTerm.length
              ? SEARCH_Movie.map(
                  ({ id, poster, faName, genre, country, year, about }) => {
                    return (
                      <Link
                        key={id}
                        href={`/movies/${id}`}
                        className="flex hover:bg-black-600 mb-4 p-2 rounded-sm"
                      >
                        <img
                          src={poster}
                          alt={faName}
                          className="w-20 h-[106px] lg:w-[150px] lg:h-[200px] "
                        />
                        <div className="text-[.7rem] mr-2 text-white flex flex-col justify-center">
                          <p className="font-bold text-[.8rem] mb-2">
                            {faName}
                          </p>
                          <p className="my-2">
                            {genre} - {country} - {year}
                          </p>
                          <p className="hidden lg:inline leading-6">{about} </p>
                          <p className="hover:text-green-500 mt-4">
                            تماشای فیلم
                          </p>
                        </div>
                      </Link>
                    );
                  }
                )
              : ""}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
