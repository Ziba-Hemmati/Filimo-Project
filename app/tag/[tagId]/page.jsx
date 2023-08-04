import { CategoriesPage, SubHeader } from "@/components";
import CategoriesBanner from "@/components/category/categories/CategoriesBanner";

const Category = ({ params }) => {
  return (
    <div className="text-white">
      <CategoriesBanner eachCategory={params.tagId}/>
      <SubHeader />
      <CategoriesPage eachCategory={params.tagId} />
    </div>
  );
};

export default Category;
