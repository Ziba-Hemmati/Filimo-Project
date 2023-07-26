"use client";
import { useDispatch } from "react-redux";
import { initValue, setClickedId } from "@/redux/features/bestOfimdbSlice";
import BestOfImdbPostersItem from "@/components/mainPage/bestOfImdb/BestOfImdbPostersItem";

const BestOfImdbPosters = ({ data }) => {
  const dispatcher = useDispatch();
  dispatcher(initValue(data));

  const handleClick = (id) => {
    dispatcher(setClickedId(id));
  };

  return (
    <ul
      className={
        "flex justify-around w-max relative pt-4 pb-8 lg2:w-full lg2:px-2"
      }
    >
      {data.map(({ poster, id, faName }) => (
        <BestOfImdbPostersItem
          key={id}
          id={id}
          handleClick={handleClick}
          poster={poster}
          faName={faName}
        />
      ))}
    </ul>
  );
};

export default BestOfImdbPosters;
