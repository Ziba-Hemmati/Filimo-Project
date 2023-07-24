import { getLocalData } from "../lib/localdata";
import Header from "@/components/mainPage/header/Header";
import FixedFooter from "@/components/mainPage/fixedFooter/FixedFooter";
import Footer from "@/components/mainPage/footer/Footer";

const data = await getLocalData();
const movie = data.movies;

const Home = () => {
  return (
    <di>
      <Header />;<p className="text-white h-80">dsvbcshhdbhc</p>
      <Footer />
      <FixedFooter />
    </di>
  );
};

export default Home;
