import Title from "../Title";
import { getLocalData } from "@/lib/localdata";

const Actors = async ({ mark }) => {
  const { movies } = await getLocalData();
  const target = movies.find((item) => item.id === Number(mark));
  
  if (!target || !Array.isArray(target.actors) || target.actors.length === 0) {
    return null;
  }

  const { actors } = target;
  return (
    <div>
      <Title className="mt-16 p-3 text-sm">بازیگران فیلم {target.faName}</Title>
      <div className="flex flex-wrap m-4">
        {actors.map((actor) => (
          <div key={actor.id} className=" mb-2 mr-2 items-center bg-black-fade-600 flex flex-row py-1 pr-2 pl-1 text-center rounded-3xl text-xs hover: hover:bg-gray-500 transition delay-100">
            <p >{actor.name}</p>
            <img src={actor.image} className="w-[30px] h-[30px] rounded-full mr-3" /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;