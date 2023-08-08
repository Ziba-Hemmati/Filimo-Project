// import ErrorBoundary from "@/app/ErrorBoundary";
// import Title from "../Title";
import { getLocalData } from "@/lib/localdata";
import EachMovieFactors from "./EachMovieFactors";

const Factors = async ({ mark }) => {
  const data = await getLocalData();
  const movie = data.movies;

  const target = movie.find((item) => item.id === Number(mark));
  const { factors } = target;

  // const factorNames = [
  //   { name: "کارگردان", key: "director" },
  //   { name: "تهیه‌کننده", key: "producer" },
  //   { name: "فیلم‌نامه‌نویس", key: "writer" },
  //   { name: "صداپیشه", key: "dublor" },
  //   { name: "آهنگساز", key: "musician" },
  //   { name: "فیلم بردار", key: "cameraMan" },
  // ];

  return <EachMovieFactors target={target} factors={factors} />;
};
export default Factors;
