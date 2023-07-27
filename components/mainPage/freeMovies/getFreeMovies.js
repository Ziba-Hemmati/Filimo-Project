import { getLocalData } from "@/lib/localdata";

const getFreeMovies = async () => {
  const data = await getLocalData();
  const movies = data.movies;
  return movies.filter(movie => movie.category === "animation");
};

export default getFreeMovies();