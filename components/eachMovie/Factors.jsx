import Title from "../Title";
import { findMovieById } from "@/utils/findMovieById";

const Factors = ({ mark, movies }) => {
  const target = findMovieById(mark, movies);
  const { factors } = target;

  const factorNames = [
    { name: "کارگردان", key: "director" },
    { name: "تهیه‌کننده", key: "producer" },
    { name: "فیلم‌نامه‌نویس", key: "writer" },
    { name: "صداپیشه", key: "dublor" },
    { name: "آهنگساز", key: "musician" },
    { name: "فیلم بردار", key: "cameraMan" },
  ];

  return (
    <div className="px-2.5 md:px-[30px] xl:px-[175px] ">
      <Title className="mt-16 mb-4 text-sm">
        سایر عوامل فیلم {target.faName}
      </Title>
      <div className="flex flex-wrap">
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
};
export default Factors;
