import { getLocalData } from "../lib/localdata";
import Header from "@/components/mainPage/header/Header";

const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return (
    <div style={{height:900}}>
     
      <Header />;
      <p className="text-white">dsvbcshhdbhc</p>
    </div>
  );
};

export default Home;
