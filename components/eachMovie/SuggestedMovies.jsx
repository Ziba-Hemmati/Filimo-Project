import Title from "@/components/Title";
import SuggestedMoviesPoster from "@/components/eachMovie/SuggestedMoviesPoster";
import { findMovieByCategory } from "@/utils/findMovieByCategory";
import { findMovieById } from "@/utils/findMovieById";

const SuggestedMovies = ({ mark, movies }) => {
  const target = findMovieById(mark, movies);
  const categories = target.category;
  const moviesCategory = findMovieByCategory(movies, categories);

  return (
    <div className={"flex flex-col my-12 px-6 pl-6 xl:px-48"}>
      <Title className={"text-sm"}>فیلم‌های پیشنهادی</Title>
      <div className={"flex justify-around"}>
        <div
          className={
            "flex justify-around w-full relative py-6 lg2:px-2 lg:flex lg:justify-center"
          }
        >
          <SuggestedMoviesPoster moviesCategory={moviesCategory} />
        </div>
      </div>
    </div>
  );
};

export default SuggestedMovies;
