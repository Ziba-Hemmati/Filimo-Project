import { MainBanner } from "@/components/mainPage/main-banner";
import WatchMovie from "@/components/mainPage/watchMovies/WatchMovie";
import { getLocalData } from "../lib/localdata";
const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return <div>
    <MainBanner movies={movie} />
    <WatchMovie/>
  </div>;
};

export default Home;
