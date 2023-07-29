import { getLocalData } from "@/lib/localdata";
import EachMovieBanner from "@/components/eachMovie/EachMovieBanner";
import EachMovieStoryAndTrailer from "@/components/eachMovie/EachMovieStoryAndTrailer";

const EachMovie = async ({ params }) => {
  const data = await getLocalData();
  const movies = data.movies;
  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} movies={movies} />
      <EachMovieStoryAndTrailer mark={params.movieId} />
    </div>
  );
};

export default EachMovie;
