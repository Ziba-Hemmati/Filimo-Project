import { getLocalData } from "@/lib/localdata";

const EachMovieBanner = async ({ mark }) => {
  const data = await getLocalData();
  const movie = data.movies;
  const target = movie.find((item) => {
    item.id === mark 
  });

  return <div className="to-white">

{
  target && <div> {target.id} </div>
}

  </div>;
};

export default EachMovieBanner;
