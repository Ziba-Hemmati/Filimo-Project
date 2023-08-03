import { getLocalData } from "@/lib/localdata";
import Title from "@/components/Title";
import Image from "next/image";

const Banners = async ({ eachCategory }) => {
    const data = await getLocalData();
    const movies = data.movies;
    const categories = data.categories;
  
    const category = movies.map((movie) => movie);
    const targetMovies = category.filter((target) => {
      return target.category == eachCategory;
    });
  
    const categoriesBanner = categories.map((category) => category);
  
    const categoryBanner = categoriesBanner.find((category) => {
      return category.enName == eachCategory;
    });
    const { enName } = categoriesBanner;
    const { banners } = categoryBanner;
return(
    <>
    <div className="">
        {banners.map((banners) => {
            return (
                <img src={banners} alt={enName}/>
            )
       
        }
    )}
      </div>
    </>
)  
}
export default Banners;
