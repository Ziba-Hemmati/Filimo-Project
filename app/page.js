import HowWatch from "@/components/mainPage/howWatch/HowWatch";
import { MainBanner } from "@/components/mainPage/main-banner";
import { getLocalData } from "../lib/localdata";
const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return <div>
    <MainBanner movies={movie} />
    <HowWatch/>
  </div>;
};

export default Home;
