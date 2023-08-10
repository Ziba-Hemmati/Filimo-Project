import { getLocalData } from "@/lib/localdata";
import MainBannerSlider from "./MainBannerSlider";

const MainBanner = async () => {
  const data = await getLocalData();
  if (!data) throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  const movies = data.movies;
  return <MainBannerSlider movies={movies} />;
};

export default MainBanner;
