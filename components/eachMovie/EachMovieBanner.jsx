import { getLocalData } from "@/lib/localdata";

const EachMovieBanner = async ({ mark }) => {
  const data = await getLocalData();
  const movie = data.movies;

  const target = movie.find((item) => {
    return item.id === Number(mark);
  });
  const {
    id,
    faName,
    enName,
    rate,
    age,
    factors,
    time,
    country,
    year,
    isDub,
    isSub,
    quality,
    genre,
    banner,
    link,
    factors : {director}
  } = target;
  // const { director } = factors;

  return (
    <div className="text-white">
      <img src={banner} alt="banner" />

      <div>
        <p>فیلم {faName} </p>
        <p>{enName} </p>
        <p>{rate} </p>
        <p> مناسب برای بالای {age} سال </p>
        <p>کارگردان:{director}</p>
        <p>
          {time} - محصول {country} - {year} -{" "}
          {isDub ? "دوبله شده" : "دوبله نشده"} -{" "}
          {isSub ? "با زیرنویس" : "بدون زیرنویس"} - کیفیت {quality}{" "}
        </p>
      </div>
      <div>{genre} </div>
      <div>بعدا میبینم</div>

      <iframe src={link} frameborder="0"></iframe>
    </div>
  );
};

export default EachMovieBanner;
