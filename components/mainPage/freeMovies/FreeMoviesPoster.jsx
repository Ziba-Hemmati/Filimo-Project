import FreeMoviesPosterItem from "@/components/mainPage/freeMovies/FreeMoviesItem";
import { getLocalData } from "@/lib/localdata";

const FreeMoviesPoster = async () => {
  const data = await getLocalData();
  if (!data) throw new Error("مشکلی در دریافت دداه‌ها وجود دارد.");
  const movies = data.movies;
  const movie = movies.filter(
    (movie) =>
      movie.category === "animation"
  );

  return (
    <ul className={"flex justify-around w-full relative py-8 lg2:px-2"}>
      <FreeMoviesPosterItem data={movie} />
    </ul>
  );
};

export default FreeMoviesPoster;
