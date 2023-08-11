import getBestOfImdb from "@/utils/getBestOfImdb";
import Title from "@/components/Title";
import BestOfImdbPosters from "@/components/mainPage/bestOfImdb/BestOfImdbPosters";
import BestOfImdbBottom from "@/components/mainPage/bestOfImdb/BestOfImdbBottom";
import { Suspense } from "react";

const BestOfImdb = async () => {
  const data = await getBestOfImdb;
  return (
    <div className={"flex flex-col text-white overflow-hidden px-2 sm:px-5"}>
      <Title className="text-center mb-6 sm:text-right lg2:px-[100px]">
        محبوبترین‌های IMDb در فیلیمو
      </Title>
      <div className={"flex justify-center lg2:px-[100px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <BestOfImdbPosters data={data} />
        </div>
      </div>
      <Suspense>
        <BestOfImdbBottom />
      </Suspense>
    </div>
  );
};

export default BestOfImdb;
