import BestOfImdb from "@/components/mainPage/bestOfImdb/BestOfImdb";
import FreeMovies from "@/components/mainPage/freeMovies/FreeMovies";
import HowWatch from "@/components/mainPage/howWatch/HowWatch";
import { MainBanner } from "@/components/mainPage/main-banner";
import Question from "@/components/mainPage/question/Question";
import WatchMovie from "@/components/mainPage/watchMovies/WatchMovie";
import { getLocalData } from "../lib/localdata";

const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return (
    <div>
      <MainBanner movies={movie} />
      <BestOfImdb />
      <WatchMovie />
      <HowWatch />
      <FreeMovies movies={movie} />
      <Question />
    </div>
  );
};

export default Home;
