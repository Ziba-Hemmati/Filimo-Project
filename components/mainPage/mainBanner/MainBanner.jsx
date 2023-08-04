import { getLocalData } from "@/lib/localdata";
import MainBannerSlider from "./MainBannerSlider";

const MainBanner = async () => {
  const data = await getLocalData();
  const movies = data.movies;

  return (
    <>
      <MainBannerSlider movies={movies} />
    </>
  );
};

export default MainBanner;
