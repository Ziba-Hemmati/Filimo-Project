import BestOfImdb from "@/components/mainPage/bestOfImdb/BestOfImdb";
import ChildrenWorld from "@/components/mainPage/children/ChildrenWorld";
import FreeMovies from "@/components/mainPage/freeMovies/FreeMovies";
import HowWatch from "@/components/mainPage/howWatch/HowWatch";
import { MainBanner } from "@/components/mainPage/mainBanner";
import Question from "@/components/mainPage/question/Question";
import WatchMovie from "@/components/mainPage/watchmovie/Watch_movie";
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
      <ChildrenWorld />
      <Question />
    </div>
  );
};

export default Home;
