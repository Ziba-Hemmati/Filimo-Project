import { getLocalData } from "@/lib/localdata";
import MainBannerSlider from "./MainBannerSlider";
import { Suspense } from "react";
import Loading from "@/app/loading";

const MainBanner = async () => {
  const data = await getLocalData();
  if (!data) throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  const movies = data.movies;
  return (
    <Suspense fallback={<Loading />}>
      <MainBannerSlider movies={movies} />;
    </Suspense>
  );
};

export default MainBanner;
