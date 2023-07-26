import { getLocalData } from "@/lib/localdata";

const getBestOfImdb = async () => {
  const data = await getLocalData();
  const movies = data.movies;
  return movies.sort((a, b) => b.rate - a.rate).splice(0, 6);
};

export default getBestOfImdb();
