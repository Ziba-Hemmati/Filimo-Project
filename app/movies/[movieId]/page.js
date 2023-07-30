import { getLocalData } from "@/lib/localdata";
const data = await getLocalData();
const movie = data.movies;
import EachMovieBanner from "@/components/eachMovie/EachMovieBanner";
import EachMovieComments from "@/components/eachMovie/EachMovieComments";
const EachMovie = ({ params }) => {
  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} />
      <EachMovieComments mark={params.movieId}/>
    </div>
  );
};

export default EachMovie;