import Link from "next/link";

const DesktopInfo = ({
  faName,
  enName,
  rate,
  age,
  time,
  country,
  year,
  isDub,
  isSub,
  quality,
  genre,
  director,
}) => {
  return (
    <div>
      <p className="text-base mb-8">فیلم {faName} </p>
      <p className="pb-3">{enName} </p>

      <div className="w-[70px] px-2 md:px-0 md:mr-0 mr-1 pt-[1px] flex  items-center rounded-3xl text-black">
        <span className="font-black text-[.6rem] bg-orange-800 py-[2.5px] pr-2 pl-1 rounded-tr-xl rounded-br-xl ">
          IMDb
        </span>
        <span className="bg-orange-400 text-[.8rem] pr-1 pl-2 rounded-tl-xl rounded-bl-xl ">
          10/{rate}
        </span>
      </div>
      <p className="text-orange-400 mt-8 mb-[52px] text-[.8rem] ">
        مناسب برای بالای {age} سال
      </p>
      <Link href={"/"}>
        <p className="text-[.7rem] mb-5">کارگردان:{director}</p>
        <p className="text-[.7rem]">
          {time} - محصول {country} - {year} -
          {isDub ? " دوبله شده " : "دوبله نشده"}-
          {isSub ? " با زیرنویس " : "بدون زیرنویس"} - کیفیت {quality}
        </p>
      </Link>
      <div className="text-[12px] bg-gray-350 w-fit px-2 py-1 rounded-2xl mt-6">
        {genre}
      </div>
    </div>
  );
};

export default DesktopInfo;
