import Title from "../Title";
import { getLocalData } from "@/lib/localdata";
const Factors = async ({ mark }) => {
  const data = await getLocalData();
  const movie = data.movies;
  const target = movie.find((item) => item.id === Number(mark));

  if (!target) {
    return null;
  }

  const { director, producer, writer, dublor, musician } = target;
  const factors = [
    { name: 'کارگردان', value: director },
    { name: 'تهیه‌کننده', value: producer },
    { name: 'فیلم‌نامه‌نویس', value: writer },
    { name: 'صداپیشه', value: dublor },
    { name: 'آهنگساز', value: musician },
  ];
  
  return (
    <div>
      <Title className="mt-10 p-3 text-sm">سایر عوامل فیلم {target.faName}</Title>
      <div className="flex flex-wrap m-4">
        {factors.map((factor) => (
          <div key={factor.id} className="">
            <p className="text-gray-800 ml-3 text-sm">{factor.name}</p>
            <p>{factor.value}</p>
          </div>
          ))}
      </div>
    </div>
  );
};

export default Factors;