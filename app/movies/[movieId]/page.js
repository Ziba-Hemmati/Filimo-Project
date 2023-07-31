import Actors from "@/components/eachMovie/Actors";
import EachMovieBanner from "@/components/eachMovie/EachMovieBanner";
import EachMovieComment from "@/components/eachMovie/EachMovieComment";
import Factors from "@/components/eachMovie/Factors";
import { getLocalData } from "@/lib/localdata";
import EachMovieStoryAndTrailer from "@/components/eachMovie/EachMovieStoryAndTrailer";

const EachMovie = async ({ params }) => {
  const data = await getLocalData();
  const movies = data.movies;
  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} />
      <EachMovieStoryAndTrailer mark={params.movieId} movies={movies} />
      <Actors mark={params.movieId} />
      <Factors mark={params.movieId} />
      <Actors mark={params.movieId}/>
      <Factors mark={params.movieId}/>
      <EachMovieComment mark={params.movieId}/>
    </div>
  );
};

export default EachMovie;
