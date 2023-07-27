// "use client";
import { getLocalData } from "../../lib/localdata";
import Movies from "@/components/movies/Movies";

const data = await getLocalData();
const movie = data.movies;

const page = () => {
  return <Movies movie={movie} />;
};

export default page;
