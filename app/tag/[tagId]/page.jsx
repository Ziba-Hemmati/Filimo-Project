import { CategoriesPage } from "@/components";
import CategoriesBanner from "@/components/category/categories/CategoriesBanner";
import { getLocalData } from "@/lib/localdata";

export const metadata = {
  title: "تماشای دسته بندی ها",
};

const Category = async ({ params }) => {
  const data = await getLocalData();
  if (!data) {
    throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  }
  return (
    <div className="text-white">
      <CategoriesBanner data={data} eachCategory={params.tagId} />
      <CategoriesPage data={data} eachCategory={params.tagId} />
    </div>
  );
};

export default Category;
