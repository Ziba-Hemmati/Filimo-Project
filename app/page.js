import Question from "@/components/mainPage/question/Question";
import { MainBanner } from "@/components/mainPage/main-banner";
import {getLocalData} from "@/lib/localdata";

const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return <div>
    <MainBanner movies={movie} />
    <Question/>
      </div>;
};

export default Home;
