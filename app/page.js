import BestOfImdb from "@/components/mainPage/bestOfImdb/BestOfImdb";
import ChildrenWorld from "@/components/mainPage/children/ChildrenWorld";
import Comments from "@/components/mainPage/commentMovies/CommentMovies";
import FreeMovies from "@/components/mainPage/freeMovies/FreeMovies";
import HowWatch from "@/components/mainPage/howWatch/HowWatch";
import { MainBanner } from "@/components/mainPage/mainBanner";
import Question from "@/components/mainPage/question/Question";
import WatchMovie from "@/components/mainPage/watchMovies/WatchMovie";
import { getLocalData } from "../lib/localdata";

const Home = async () => {
  const data = await getLocalData();
  const movie = data.movies;
  return (
    <div>
      <MainBanner movies={movie} />
      <BestOfImdb />
      <WatchMovie />
      <HowWatch />
      <FreeMovies />
      <Comments />
      <ChildrenWorld />
      <Question />
    </div>
  );
};

export default Home;
