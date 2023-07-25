import ChildrenWorld from "@/components/mainPage/children/ChildrenWorld";
import { getLocalData } from "../lib/localdata";

const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return <div>
    <ChildrenWorld/>
  </div>;
};

export default Home;
