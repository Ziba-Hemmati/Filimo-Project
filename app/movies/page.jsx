import { Movie } from "@/components";
import { getLocalData } from "@/lib/localdata";

export const metadata = {
  title: "بهترین فیلم‌های سینمایی",
};

const Movies = async () => {
  const data = await getLocalData();
  if (!data) throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  return <Movie data={data} />;
};

export default Movies;
