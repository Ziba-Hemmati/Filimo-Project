import { getLocalData } from "@/lib/localdata";
const data = await getLocalData();
const movie = data.movies;
import EachMovieBanner from "@/components/eachMovie/EachMovieBanner";
import EachMovieStoryAndTrailer from "@/components/eachMovie/EachMovieStoryAndTrailer";
import EachMovieModal from "@/components/eachMovie/EachMovieModal";
const EachMovie = ({ params }) => {
  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} />
      <EachMovieStoryAndTrailer mark={params.movieId} />
      <EachMovieModal />
    </div>
  );
};

export default EachMovie;
