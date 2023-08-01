import BestOfImdb from "@/components/mainPage/bestOfImdb/BestOfImdb";
import ChildrenWorld from "@/components/mainPage/children/ChildrenWorld";
import Comments from "@/components/mainPage/commentMovies/CommentMovies";
import FreeMovies from "@/components/mainPage/freeMovies/FreeMovies";
import HowWatch from "@/components/mainPage/howWatch/HowWatch";
import Question from "@/components/mainPage/question/Question";
import WatchMovie from "@/components/mainPage/watchMovies/WatchMovie";
import { getLocalData } from "../lib/localdata";
import Footer from "@/components/mainPage/footer/Footer";
import MainBanner from "@/components/mainPage/mainBanner/MainBanner";

const Home = async () => {
  const data = await getLocalData();
  const movie = data.movies;
  return (
    <div>
      <MainBanner />
      <BestOfImdb />
      <WatchMovie />
      <HowWatch />
      <FreeMovies />
      <Comments />
      <ChildrenWorld />
      <Question />
      <Footer />
    </div>
  );
};

export default Home;
