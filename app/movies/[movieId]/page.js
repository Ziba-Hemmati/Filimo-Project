import Actors from "@/components/eachMovie/Actors";
import EachMovieBanner from "@/components/eachMovie/EachMovieBanner";
import EachMovieComment from "@/components/eachMovie/EachMovieComment";
import Factors from "@/components/eachMovie/Factors";
import SuggestedMovies from "@/components/eachMovie/SuggestedMovies"
import { getLocalData } from "@/lib/localdata";
const data = await getLocalData();
const movie = data.movies;
const EachMovie = ({ params }) => {
  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} />
      <SuggestedMovies mark={params.movieId} />
      <Actors mark={params.movieId}/>
      <Factors mark={params.movieId}/>
      <EachMovieComment mark={params.movieId}/>
    </div>
  );
}

export default EachMovie;
