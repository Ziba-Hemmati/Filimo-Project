import { getLocalData } from "@/lib/localdata";
import {
  BestOfImdb,
  ChildrenWorld,
  CommentMovies,
  Footer,
  FreeMovies,
  HowWatch,
  MainBanner,
  Question,
  WatchMovie,
} from "@/components";

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
      <ChildrenWorld />
      <CommentMovies />
      <Question />
      <Footer />
    </div>
  );
};

export default Home;
