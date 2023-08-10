import Title from "@/components/Title";
import SuggestedMoviesPoster from "@/components/eachMovie/SuggestedMoviesPoster";

const SuggestedMovies = ({ mark, movies }) => {
  const target = movies.find((item) => item.id === Number(mark));
  const categories = target.category;
  const moviesCategory = movies.filter((item) => item.category === categories);

  return (
    <div className={"flex flex-col my-12 px-6 pl-6 xl:px-48"}>
      <Title className={"text-sm"}>فیلم‌های پیشنهادی</Title>
      <div className={"flex justify-around"}>
        <div
          className={"flex justify-around w-full relative py-6 lg2:px-2 lg:flex lg:justify-center"}
        >
            <SuggestedMoviesPoster moviesCategory={moviesCategory} />
        </div>
      </div>
   </div>
 );
}

export default SuggestedMovies;
