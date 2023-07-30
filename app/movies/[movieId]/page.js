import Actors from "@/components/eachMovie/Actors";
import EachMovieBanner from "@/components/eachMovie/EachMovieBanner";
import Factors from "@/components/eachMovie/Factors";
import { getLocalData } from "@/lib/localdata";
const data = await getLocalData();
const movie = data.movies;
const EachMovie = ({ params }) => {
  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} />
      <Actors mark={params.movieId}/>
      <Factors mark={params.movieId}/>
    </div>
  );
}

export default EachMovie;
