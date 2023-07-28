import SubHeader from "@/components/category/subHeader/SubHeader";
import { getLocalData } from "@/lib/localdata";

const data = await getLocalData();
const movie = data.movies;
const Categories = () => {
  return (
    <>
      <SubHeader />
    </>
  );
};

export default Categories;
