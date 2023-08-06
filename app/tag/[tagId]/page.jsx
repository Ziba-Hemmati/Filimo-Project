import { CategoriesPage } from "@/components";
import CategoriesBanner from "@/components/category/categories/CategoriesBanner";
import { getLocalData } from "@/lib/localdata";
import { getTargetData } from "@/components/category/categories/getSortedMovies";

const Category = async ({ params }) => {
  const data = await getLocalData();
  return (
    <div className="text-white">
      <CategoriesBanner data={data} eachCategory={params.tagId} />
      <CategoriesPage data={data} eachCategory={params.tagId} />
    </div>
  );
};

export default Category;
