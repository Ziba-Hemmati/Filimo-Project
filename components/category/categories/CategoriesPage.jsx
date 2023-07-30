import { getLocalData } from "@/lib/localdata";
import Title from "@/components/Title";
import CategoryPoster from "@/components/category/categories/CategoriesPoster";

const CategoriesPage = async () => {
  const data = await getLocalData();
  const movies = data.movies;
  const dataa = movies.filter((movie) => movie.category === "animation");
  const datab = movies.filter((movie) => movie.category === "adventure");
  const datac = movies.filter((movie) => movie.category === "comedy");
  const datad = movies.filter((movie) => movie.category === "action");
  const datae = movies.filter((movie) => movie.category === "drum");

  return (
    <div
      className={"flex flex-col overflow-hidden text-white my-12 px-5 sm:px-10"}
    >
      <div className="flex justify-between w-full">
        <Title className="text-[0.9rem] w-fit hover:text-orange-300 cursor-pointer">
          انیمیشن
        </Title>
        <Title className="text-[0.65rem] w-fit text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </Title>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoryPoster data={dataa} />
        </div>
      </div>

      <div className="flex justify-between w-full">
        <Title className="text-[0.9rem] w-fit hover:text-orange-300 cursor-pointer">
          ماجراجویی
        </Title>
        <Title className="text-[0.65rem] w-fit text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </Title>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoryPoster data={datab} />
        </div>
      </div>

      <div className="flex justify-between w-full">
        <Title className="text-[0.9rem] w-fit hover:text-orange-300 cursor-pointer">
          کمدی
        </Title>
        <Title className="text-[0.65rem] w-fit text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </Title>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoryPoster data={datac} />
        </div>
      </div>

      <div className="flex justify-between w-full">
        <Title className="text-[0.9rem] w-fit hover:text-orange-300 cursor-pointer">
          اکشن
        </Title>
        <Title className="text-[0.65rem] w-fit text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </Title>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoryPoster data={datad} />
        </div>
      </div>

      <div className="flex justify-between w-full">
        <Title className="text-[0.9rem] w-fit hover:text-orange-300 cursor-pointer">
          درام
        </Title>
        <Title className="text-[0.65rem] w-fit text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </Title>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoryPoster data={datae} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
