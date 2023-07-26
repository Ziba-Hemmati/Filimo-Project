import { getLocalData } from "../lib/localdata";

const data = await getLocalData();
const movie = data.movies;

import { MainBanner } from "@/components/mainPage/main-banner";
import WatchMovie from "@/components/mainPage/watchmovie/Watch_movie";
import HowWatch from "@/components/mainPage/howWatch/HowWatch";


const Home = () => {
  return <div>
    <MainBanner movies={movie} />
    <WatchMovie/>
    <HowWatch/>
  </div>;
};

export default Home;
