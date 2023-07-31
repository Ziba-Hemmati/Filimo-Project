import { getLocalData } from "@/lib/localdata";
import Title from "@/components/Title";

const EachMovieStory = ({ faName, story }) => {
  // const data = await getLocalData();
  // const movie = data.movies;

  // const target = movie.find((item) => {
  //   return item.id === Number(mark);
  // });
  // const {
  //   id,
  //   faName,
  //   enName,
  //   rate,
  //   age,
  //   factors,
  //   time,
  //   country,
  //   year,
  //   isDub,
  //   isSub,
  //   quality,
  //   genre,
  //   banner,
  //   link,
  // } = target;
  // const { director } = factors;
  // console.log(banner);
  return (
    <div className="text-white relative overflow-hidden w-1/2">
      <Title className={"text-sm"}>داستان فیلم {faName}</Title>
      <p>{story}</p>
    </div>
  );
};

export default EachMovieStory;
