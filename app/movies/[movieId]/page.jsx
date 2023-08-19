import { getLocalData } from "@/lib/localdata";
import {
  Actors,
  EachMovieBanner,
  EachMovieComment,
  EachMovieStoryAndTrailer,
  SuggestedMovies,
  Factors,
} from "@/components";

export const metadata = {
  title: "تماشای هر فیلم",
};

export async function getStaticPaths() {
  const data = await getLocalData();
  const movie = data.movies;
  const paths = movie.map((movie) => {
    return {
      params: {
        movieId: `${movie.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const EachMovie = async ({ params }) => {
  const data = await getLocalData();
  if (!data) {
    throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  }
  const movies = data.movies;
  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} movies={movies} />
      <EachMovieStoryAndTrailer mark={params.movieId} movies={movies} />
      <SuggestedMovies mark={params.movieId} movies={movies} />
      <Actors mark={params.movieId} movies={movies} />
      <Factors mark={params.movieId} movies={movies} />
      <EachMovieComment mark={params.movieId} movies={movies} />
    </div>
  );
};
export default EachMovie;
