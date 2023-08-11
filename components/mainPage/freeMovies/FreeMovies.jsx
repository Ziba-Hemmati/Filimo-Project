import Title from "@/components/Title";
import FreeMoviesPoster from "@/components/mainPage/freeMovies/FreeMoviesPoster";

const FreeMovies = () => {

  return (
    <div className={"flex flex-col text-white my-12 px-6 xl:px-36"}>
      <Title>انیمیشن</Title>
      <div className={"flex justify-center"}>
        <div
          className={"w-full lg:flex lg:justify-center"}
        >
          <FreeMoviesPoster />
        </div>
      </div>
   </div>
 );
}

export default FreeMovies;