import BannerSlider from "./BannerSlider";

const CategoriesBanner = async ({ eachCategory, data }) => {
  const categories = data.categories;

  const categoryBanner = categories.find((category) => {
    return category.enName === eachCategory;
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
