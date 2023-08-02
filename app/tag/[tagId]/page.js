import CategoriesPage from "@/components/category/categories/CategoriesPage";
import SubHeader from "@/components/category/subHeader/SubHeader";

const Category = ({ params }) => {
  // console.log(params);
  return (
    <div className="text-white">
      <SubHeader />
      <CategoriesPage eachCategory={params.tagId} />
    </div>
  );
};

export default Category;
