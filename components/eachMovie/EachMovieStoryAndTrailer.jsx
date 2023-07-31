import { getLocalData } from "@/lib/localdata";
import EachMovieStory from "@/components/eachMovie/EachMovieStory";
import EachMovieTrailer from "@/components/eachMovie/EachMovieTrailer";

const EachMovieStoryAndTrailer = async ({ mark }) => {
  const data = await getLocalData();
  const movie = data.movies;

  const target = movie.find((item) => {
    return item.id === Number(mark);
  });
  const {
    id,
    faName,
    enName,
    rate,
    age,
    factors,
    time,
    country,
    year,
    isDub,
    isSub,
    quality,
    genre,
    banner,
    link,
    story,
  } = target;
  const { director } = factors;
  console.log(banner);
  return (
    <div className="flex text-white relative overflow-hidden px-[100px]">
      <EachMovieTrailer link={link} />
      <EachMovieStory faName={faName} story={story} />
    </div>
  );
};

export default EachMovieStoryAndTrailer;
