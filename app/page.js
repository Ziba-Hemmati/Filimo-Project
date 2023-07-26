import WatchMovie from "@/components/mainPage/watchmovie/Watch_movie";
import { getLocalData } from "../lib/localdata";
import { MainBanner } from "@/components/mainPage/main-banner";
const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return <div>
    <MainBanner movies={movie} />
    <WatchMovie/>
  </div>;
};

export default Home;
