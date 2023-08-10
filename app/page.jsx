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
import { Suspense } from "react";
import Loading from "./loading";

const Home = () => {
  return (
    <Suspense fallback={<Loading/>} >
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
    </Suspense>
  );
};

export default Home;
