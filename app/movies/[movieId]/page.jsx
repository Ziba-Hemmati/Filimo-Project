import { getLocalData } from "@/lib/localdata";
import {
  Actors,
  EachMovieBanner,
  EachMovieComment,
  EachMovieStoryAndTrailer,
  // SuggestedMovies,
  Factors,
} from "@/components";

const EachMovie = async ({ params }) => {
  const data = await getLocalData();
  const movies = data.movies;
  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} />
      <EachMovieStoryAndTrailer mark={params.movieId} movies={movies} />
      <Actors mark={params.movieId} />
      <Factors mark={params.movieId} />
      <EachMovieComment mark={params.movieId} />
    </div>
  );
};

export default EachMovie;
