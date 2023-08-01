import CategoriesPage from "@/components/category/categories/CategoriesPage";
import SubHeader from "@/components/category/subHeader/SubHeader";

const Category = () => {
  return (
    <div className="text-white">
      <CategoriesPage />
      <SubHeader />
      <CategoriesPage />
    </div>
  );
};

export default Category;
