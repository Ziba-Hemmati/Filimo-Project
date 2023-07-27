import { getLocalData } from "../lib/localdata";
import { MainBanner } from "@/components/mainPage/main-banner";
import BestOfImdb from "@/components/mainPage/bestOfImdb/BestOfImdb";
import WatchMovie from "@/components/mainPage/watchmovie/Watch_movie";
import HowWatch from "@/components/mainPage/howWatch/HowWatch";
import FreeMovies from "@/components/mainPage/freeMovies/FreeMovies";
import Question from "@/components/mainPage/question/Question";

const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return (
    <div>
      <MainBanner movies={movie} />
      <BestOfImdb />
      <WatchMovie />
      <HowWatch />
      <FreeMovies />
      <Question />
    </div>
  );
};

export default Home;
