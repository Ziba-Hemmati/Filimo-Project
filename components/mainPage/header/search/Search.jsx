"use client";
import Movies from "@/app/movies/page";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

const Search = ({movies}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const searchByFaName = (search) => {
    return movies.filter((item) =>
      item.faName.includes(search)
    );
  };
  const SEARCH_Movie = useMemo(() => {
    searchByFaName(searchTerm);
  }, [searchTerm]);
  console.log(SEARCH_Movie);

  return (
    <>
      <input
        id="search"
        type="text"
        placeholder="جست و جو ..."
        className=" bg-black-700 w-1/2 placeholder:text-xs rounded focus:outline-none text-orange-600 xl:p-1 pr-2"
        value={searchTerm}
        onChange={handleChange}
      />

      {/* {!!searchTerm &&
        SEARCH_Movie.map((movie) => {
          <Link href={`/movies/${id}`}></Link>;
        })} */}
    </>
  );
};

export default Search;
