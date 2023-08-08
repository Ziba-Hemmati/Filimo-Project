// import ErrorBoundary from "@/app/ErrorBoundary";
// import Title from "../Title";
import { getLocalData } from "@/lib/localdata";
import EachMovieFactors from "./EachMovieFactors";

const Factors = async ({ mark }) => {
  const data = await getLocalData();
  if (!data) {
    throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  } else {
    const movie = data.movies;

    const target = movie.find((item) => item.id === Number(mark));
    const { factors } = target;

    // const factorNames = [
    //   { name: "کارگردان", key: "director" },
    //   { name: "تهیه‌کننده", key: "producer" },
    //   { name: "فیلم‌نامه‌نویس", key: "writer" },
    //   { name: "صداپیشه", key: "dublor" },
    //   { name: "آهنگساز", key: "musician" },
    //   { name: "فیلم بردار", key: "cameraMan" },
    // ];

    return (
      <div className="px-3 sm:px-0 md:px-8 xl:px-[9rem]">
        <Title className="mt-14 p-3 text-sm">
          سایر عوامل فیلم {target.faName}
        </Title>
        <div className="flex flex-wrap m-3">
          {factorNames.map((factor) => {
            const factorValue = factors[factor.key];
            if (factorValue !== null && factorValue !== undefined) {
              return (
                <div
                  key={factor.key}
                  className="px-2.5 mb-5 font-iran-sans-medium"
                >
                  <p className="text-gray-800 ml-3 text-xs mb-2 font-bold">
                    {factor.name}
                  </p>
                  <p className="text-[.65rem] hover:text-orange-300 cursor-pointer">
                    {factorValue}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
};
export default Factors;
