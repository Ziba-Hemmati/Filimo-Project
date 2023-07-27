import getFreeMovies from "@/components/mainPage/freeMovies/getFreeMovies";
import Title from "@/components/Title";
import FreeMoviesPoster from "@/components/mainPage/freeMovies/FreeMoviesPoster";

const FreeMovies = async () => {
  const data = await getFreeMovies;

  return (
    <div className={"flex flex-col overflow-hidden text-white my-12 px-2 sm:px-8 "}>
      <Title>انیمیشن</Title>
      <div className={"flex justify-center lg2:px-[40px]"}>
        <div
          className={"w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "}
        >
          <FreeMoviesPoster data={data} />
        </div>
      </div>
   </div>
 );
}

export default FreeMovies;