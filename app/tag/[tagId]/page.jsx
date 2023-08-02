import { CategoriesPage, SubHeader } from "@/components";

const Category = ({ params }) => {
  return (
    <div className="text-white">
      <SubHeader />
      <CategoriesPage eachCategory={params.tagId} />
    </div>
  );
};

export default Category;
