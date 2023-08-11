import CommentSlider from "@/components/mainPage/commentMovies/CommentsSlider";
import { getLocalData } from "@/lib/localdata";

const CommentMovies = async () => {
  const data = await getLocalData();
  if (!data) throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  const movie = data.movies;
  return (
    <div className="p-2 lg:p-8 md:w-[98%] xl:w-[85%] mx-auto mb-4">
      <h3 className="text-white font-bold text-sm mt-4 md:mt-0 ">
        نظر کاربران بعد از تماشای فیلیمو
      </h3>
      <CommentSlider movie={movie} />
    </div>
  );
};

export default CommentMovies;
