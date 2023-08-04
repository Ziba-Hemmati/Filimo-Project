import Title from "../Title";
import { getLocalData } from "@/lib/localdata";
const Factors = async ({ mark }) => {
  const data = await getLocalData();
  const movie = data.movies;

  const target = movie.find((item) => {
    return item.id === Number(mark);
  });

  const { factors: { director = null },
        factors: { writer = null },
        factors: { producer = null },
        factors: { cameraMan = null },
        factors: { musician = null },
        factors: { dublor = null },
      } = target;

const factors = [
  { name: 'کارگردان', value: director },
  { name: 'تهیه‌کننده', value: producer },
  { name: 'فیلم‌نامه‌نویس', value: writer },
  { name: 'صداپیشه', value: dublor },
  { name: 'آهنگساز', value: musician },
  { name: 'فیلم بردار' , value: cameraMan}
];

return (
  <div className="md:px-7">
    <Title className="mt-16 p-3 text-sm">سایر عوامل فیلم {target.faName}</Title>
    <div className="flex flex-wrap m-3">
      {factors.map((factor) => (
        (factor.value !== null) && (
          <div key={factor.id} className=" px-2.5 mb-5 font-iran-sans-medium">
            <p className="text-gray-800 ml-3 text-xs mb-2 font-bold">{factor.name}</p>
            <p className="text-[.65rem] hover:text-orange-300 cursor-pointer">{factor.value}</p>
          </div>
        )
      ))}
    </div>
  </div>
  );
};

export default Factors;