import { getLocalData } from "@/lib/localdata";

const EachMovieModal = ({ link }) => {
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
    <div className="text-white fixed flex justify-center items-center w-full h-full top-0 right-0 z-10">
      <div
        className={"w-full h-full bg-black opacity-95 absolute top-0 right-0"}
      ></div>

      <button className={"top-3 right-4 absolute"}>close</button>
      <iframe
        src={
          "https://www.aparat.com/video/video/embed/videohash/Q3iTJ/vt/frame"
        }
        frameborder="0"
        className={"w-[50%] h-[65%] z-10"}
      ></iframe>
    </div>
  );
};

export default EachMovieModal;
