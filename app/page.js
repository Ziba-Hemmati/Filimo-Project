import { getLocalData } from "../lib/localdata";
import Question from "@/components/mainPage/question/Question";

const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return <div>
    <Question/>
  </div>;
};

export default Home;
