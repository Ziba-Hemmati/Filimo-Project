import Loading from "@/app/loading";
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
        <Suspense fallback={<Loading />}>
          <CategoriesBanner data={data} eachCategory={params.tagId} />
          <CategoriesPage data={data} eachCategory={params.tagId} />
        </Suspense>
      </div>
    );
  }
};

export default Category;
