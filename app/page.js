import WatchMovie from "@/components/mainPage/watchmovie/Watch_movie";
import { getLocalData } from "../lib/localdata";

const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return <div>
    <WatchMovie/>
  </div>;
};

export default Home;
