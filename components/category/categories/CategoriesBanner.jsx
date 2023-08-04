import { getLocalData } from "@/lib/localdata";
import BannerSlider from "./BannerSlider";

const CategoriesBanner = async ({ eachCategory }) => {
  const data = await getLocalData();
  const movies = data.movies;
  const categories = data.categories;

  const categoriesBanner = categories.map((category) => category);
  const categoryBanner = categoriesBanner.find((category) => {
    return category.enName == eachCategory;
  });
  const { banners } = categoryBanner;
  return (
    <>
      <div>
        <BannerSlider banners={banners} />
      </div>
    </>
  );
};
export default CategoriesBanner;
