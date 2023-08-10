import { Movie } from "@/components";
import { getLocalData } from "@/lib/localdata";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
  title: "بهترین فیلم‌های سینمایی",
};

const Movies = async () => {
  const data = await getLocalData();
  if (!data) throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  return (
    <Suspense fallback={<Loading />}>
      <Movie data={data} />
    </Suspense>
  );
};

export default Movies;
