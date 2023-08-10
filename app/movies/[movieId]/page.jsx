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

const EachMovie = async ({ params }) => {
  const data = await getLocalData();
  if (!data) {
    throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  } else {
    const movies = data.movies;
    return (
      <div className="text-white">
        <Suspense fallback={<Loading />}>
          <EachMovieBanner mark={params.movieId} />
          <EachMovieStoryAndTrailer mark={params.movieId} movies={movies} />
          <SuggestedMovies mark={params.movieId} movies={movies} />
          <Actors mark={params.movieId} />
          <Factors mark={params.movieId} />
          <EachMovieComment mark={params.movieId} />
        </Suspense>
      </div>
    );
  }
};
export default EachMovie;
