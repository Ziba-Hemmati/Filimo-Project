import { getLocalData } from "@/lib/localdata";
import Title from "@/components/Title";
import CategoriesPoster from "@/components/category/categories/CategoriesPoster";

const CategoriesPage = async () => {
  const data = await getLocalData();
  const movies = data.movies;
  const dataa = movies.filter((movie) => movie.category === "animation");
  const datab = movies.filter((movie) => movie.category === "adventure");
  const datac = movies.filter((movie) => movie.category === "comedy");
  const datad = movies.filter((movie) => movie.category === "action");
  const datae = movies.filter((movie) => movie.category === "drum");
  const categories = data.categories;

  return (
    <div
      className={"flex flex-col overflow-hidden text-white my-12 px-5 sm:px-10"}
    >
      <div className="flex justify-between w-full px-2">
        <Title className="text-[14px] w-fit hover:text-orange-300 cursor-pointer">
          انیمیشن
        </Title>
        <p className="text-[11px] w-fit font-bold text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </p>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoriesPoster data={dataa} />
        </div>
      </div>

      <div className="flex justify-between w-full px-2">
        <Title className="text-[14px] w-fit hover:text-orange-300 cursor-pointer">
          ماجراجویی
        </Title>
        <p className="text-[11px] w-fit font-bold text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </p>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoriesPoster data={datab} />
        </div>
      </div>

      <div className="flex justify-between w-full px-2">
        <Title className="text-[14px] w-fit hover:text-orange-300 cursor-pointer">
          کمدی
        </Title>
        <p className="text-[11px] w-fit font-bold text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </p>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoriesPoster data={datac} />
        </div>
      </div>

      <div className="flex justify-between w-full px-2">
        <Title className="text-[14px] w-fit hover:text-orange-300 cursor-pointer">
          اکشن
        </Title>
        <p className="text-[11px] w-fit font-bold text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </p>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoriesPoster data={datad} />
        </div>
      </div>

      <div className="flex justify-between w-full px-2">
        <Title className="text-[14px] w-fit hover:text-orange-300 cursor-pointer">
          درام
        </Title>
        <p className="text-[11px] w-fit font-bold text-orange-300 mb- hover: cursor-pointer">
          مشاهده همه {">"}
        </p>
      </div>
      <div className={"flex justify-center lg2:px-[10px]"}>
        <div
          className={
            "w-full overflow-x-scroll lg:flex lg:justify-center lg2:overflow-hidden "
          }
        >
          <CategoriesPoster data={datae} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
