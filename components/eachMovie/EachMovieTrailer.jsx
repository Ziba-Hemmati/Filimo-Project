import { getLocalData } from "@/lib/localdata";

const EachMovieTrailer = async ({ link }) => {
  // const data = await getLocalData();
  // const movie = data.movies;
  //
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
      <div></div>

      <iframe src={link} frameborder="0" height={324} width={"100%"} />
    </div>
  );
};

export default EachMovieTrailer;
