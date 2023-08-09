import { CategoriesPage } from "@/components";
import CategoriesBanner from "@/components/category/categories/CategoriesBanner";
import { getLocalData } from "@/lib/localdata";
import { Suspense } from "react";

const Category = async ({ params }) => {
  const data = await getLocalData();
  if (!data) {
    throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  } else {
    return (
      <div className="text-white">
        <Suspense
          fallback={
            <p className="my-6 px-[10px] lg:px-[30px]">
              در حال بارگذاری داده‌ها...
            </p>
          }
        >
          <CategoriesBanner data={data} eachCategory={params.tagId} />
          <CategoriesPage data={data} eachCategory={params.tagId} />
        </Suspense>
      </div>
    );
  }
};

export default Category;
