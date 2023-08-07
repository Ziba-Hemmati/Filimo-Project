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

const Home = () => {
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
