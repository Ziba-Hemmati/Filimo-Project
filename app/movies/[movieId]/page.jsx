import { getLocalData } from "@/lib/localdata";
import {
  Actors,
  EachMovieBanner,
  EachMovieComment,
  EachMovieStoryAndTrailer,
  SuggestedMovies,
  Factors,
} from "@/components";
import { Suspense } from "react";
import Loading from "@/app/loading";

export const metadata = {
  title: "تماشای هر فیلم",
};

const EachMovie = async ({ params }) => {
  const data = await getLocalData();
  if (!data) {
    throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  }
  const movies = data.movies;
  return (
    <div className="text-white">
      <Suspense fallback={<Loading />}>
        <EachMovieBanner mark={params.movieId} movies={movies} />
        <EachMovieStoryAndTrailer mark={params.movieId} movies={movies} />
        <SuggestedMovies mark={params.movieId} movies={movies} />
        <Actors mark={params.movieId} movies={movies} />
        <Factors mark={params.movieId} movies={movies} />
        <EachMovieComment mark={params.movieId} movies={movies} />
      </Suspense>
    </div>
  );
};
export default EachMovie;
