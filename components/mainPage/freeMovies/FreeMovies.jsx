import Title from "@/components/Title";
import FreeMoviesPoster from "@/components/mainPage/freeMovies/FreeMoviesPoster";

const FreeMovies = () => {

  return (
    <div className={"flex flex-col overflow-hidden text-white my-12 px-4 lg2:px-20"}>
      <Title>انیمیشن</Title>
      <div className={"flex justify-center lg2:px-[40px]"}>
        <div
          className={"w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "}
        >
          <FreeMoviesPoster />
        </div>
      </div>
   </div>
 );
}

export default FreeMovies;