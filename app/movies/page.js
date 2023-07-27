import { getLocalData } from "../../lib/localdata";

const data = await getLocalData();
const movie = data.movies;

const page = () => {
  return (
    <div className="text-white flex flex-wrap p-[10px]">
      {movie.map(({ poster, id, faName, genre, year, country, isDub }) => {
        return (
          <div key={id}>
            <div>
              <img className="w-[120px] rounded-[4px]" src={poster} />
              <p className="text-[.7rem]">{faName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
