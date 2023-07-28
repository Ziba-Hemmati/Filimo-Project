import SubHeader from "@/components/category/subHeader/SubHeader";
import { MainBanner } from "@/components/mainPage/mainBanner";
import { getLocalData } from "@/lib/localdata";

const data = await getLocalData();
const movie = data.movies;
const Categories = () => {
  return (
    <>
      <MainBanner movies={movie}/>
      <SubHeader />
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
      <MainBanner movies={movie}/>
    </>
  );
};

export default Categories;
