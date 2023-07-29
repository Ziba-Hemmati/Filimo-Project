import SubHeader from "@/components/category/subHeader/SubHeader";
import CategoriesPage from "@/components/category/categories/CategoriesPage";
import { getLocalData } from "@/lib/localdata";

const data = await getLocalData();
const movie = data.movies;
const Categories = () => {
  return (
    <>
      <SubHeader />
      <CategoriesPage />
    </>
  );
};

export default Categories;
