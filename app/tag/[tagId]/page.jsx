import { CategoriesPage } from "@/components";
import CategoriesBanner from "@/components/category/categories/CategoriesBanner";
import { getLocalData } from "@/lib/localdata";

export const metadata = {
  title: "تماشای دسته بندی ها",
};

const path = ["action", "drama", "adventure", "comedy", "animation"];

export async function getStaticPaths() {
  const paths = path.map((post) => {
    return {
      params: {
        tagId: `${post}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

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
